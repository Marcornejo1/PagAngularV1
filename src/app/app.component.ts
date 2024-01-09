import { Component, OnInit, EventEmitter,Output,Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmpleadosService } from './empleados.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 title(title:any){
  throw new Error('Metodo no implementado');
 }
 user: any;
 usr = {
   email: "",
   name: '',
 }

  
  constructor(private router:Router,public dialog:MatDialog,private empleadoservicio: EmpleadosService){
    const sessionValue=sessionStorage.getItem('user');
    if (sessionValue == null || sessionValue == "") {
      console.log("El objeto de sesión no está inicializado"); //inicialízalo aquí
      const initialSessionObject: any = {
        Respuesta: 'valorPredeterminado',
        ADUser: 'Nadie',
        ADAreaUsr: 'Visita',
        SesInic: 'NO'
      };
      sessionStorage.setItem('user', JSON.stringify(initialSessionObject));
    }
    else {
      console.log("Si existe objeto: " + sessionStorage.getItem('user'));

    }
  }
   
  

 


}
