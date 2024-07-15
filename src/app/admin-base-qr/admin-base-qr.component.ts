import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseQRService } from '../base-qr.service';



@Component({
  selector: 'app-admin-base-qr',
  templateUrl: './admin-base-qr.component.html',
  styleUrl: './admin-base-qr.component.scss'
})
export class AdminBaseQRComponent {
  Id:any='';
  perfilAdd={
    Usuario:"",
    Nombre:"",
    Area:"",
    Nivel:"",
    RFC:"",
  }
  hide: any;
  SimboloCarga: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private toastr: ToastrService, private fb: FormBuilder,private QRService:BaseQRService) {
  console.log('Enviado: ',data.Perfil)
  this.Id=data.Perfil.Id
  }

  enviarFormularioAgregar(formulario: NgForm) {
    console.log(this.perfilAdd)
    this.QRService.AgregarDatos(this.perfilAdd).subscribe(
      (data:any)=>{
        this.toastr.success("Usuario Agregadp con exito, se vera reflejado al recargar la pagina","",{positionClass:'toast-bottom-right'})
        console.log(data)
        this.dialog.closeAll();
      }
    )

  }

  enviarFormularioEditar(formulario: NgForm) {

  }

  Eliminar() {
    this.QRService.EliminarDatos(this.Id).subscribe(
      (data:any)=>{
        this.toastr.success("Usuario Eliminado con exito, se vera reflejado al recargar la pagina","",{positionClass:'toast-bottom-right'})
        console.log(data)
        this.dialog.closeAll();
      },
      (error)=>{

      }
    );
  }

}
