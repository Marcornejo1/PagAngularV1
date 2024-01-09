import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  perfil:any={};

  constructor(public dialog:MatDialog,private empleadoservicio:EmpleadosService) { }
  
  user = {
    usuario: '',
    clave: ''
  }
  
  enviarFormulario() {
    this.empleadoservicio.enviarDatos(this.user).subscribe(
      respuesta=>{
        if(respuesta!=null){
          this.perfil=respuesta;
          console.log('Respuesta del Perfil: ', this.perfil.Respuesta);
          console.log('Respuesta del PHP: ', this.perfil);
          this.empleadoservicio.DatosPerfil=this.perfil;
          this.dialog.closeAll();
        }
      },
      error=>{
        console.log('Error al enviar los datos: ', error);
      }
    );
  }

  hide = true;

}
