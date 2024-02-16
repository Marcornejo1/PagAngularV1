import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpleadosService } from '../empleados.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  SimboloCarga = false;
  perfil: any = {};

  constructor(public dialog: MatDialog, private empleadoservicio: EmpleadosService, private toastr: ToastrService) { }

  user = {
    usuario: '',
    clave: ''
  }

  enviarFormulario(formulario: NgForm) {
    this.SimboloCarga = true;
    this.empleadoservicio.enviarDatos(this.user).subscribe(
      respuesta => {
        if (respuesta != null) {
          this.perfil = respuesta;
          if (this.perfil.SesInic == 'NO') {
            this.SimboloCarga = false;
            this.toastr.error("No se pudo iniciar sesion, revisa tu usuario/clave e intenta de nuevo",this.perfil.Respuesta,{positionClass:'toast-bottom-right'})
            formulario.reset();
          } else {
            console.log('Respuesta del Perfil: ', this.perfil.Respuesta);
            //console.log('Respuesta del PHP: ', this.perfil);
            this.empleadoservicio.DatosPerfil = this.perfil;
            this.dialog.closeAll();
          }
        }
      },
      error => {
        //console.log('Error al enviar los datos: ', error);
      }
    );
  }

  hide = true;

}
