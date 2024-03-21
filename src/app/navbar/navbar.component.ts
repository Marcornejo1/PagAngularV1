import { Component, EventEmitter, Output, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private readonly SESSION_KEY = 'mySessionObject';
  start: any;
  sesionIniciada: boolean = false;
  perfil: any = {
    Respuesta: "Predeterminado",
    ADUser: "",
    ADAreaUsr: "Visita",
    SesInic: "",
    RFC: "",
  }
  @Output() salida = new EventEmitter<boolean>();

  constructor(private router: Router, private empleadosServicio: EmpleadosService, public dialog: MatDialog, private toastr: ToastrService) {

    const SessionValue = localStorage.getItem('user');
    this.perfil = SessionValue;
    this.perfil = JSON.parse(this.perfil);

    //console.log('Hola: ',SessionValue);
    if (SessionValue?.includes('"SesInic":""') || SessionValue?.includes('"SesInic":"NO"')) {
      // console.log("No existe sesion Iniciada");
      const initialSessionObject: any = {
        Respuesta: 'Predeterminada',
        ADUser: '',
        ADAreaUsr: 'Visita',
        SesInic: "NO",
        RFC: '',
      };
      localStorage.setItem('user', JSON.stringify(initialSessionObject));
      this.sesionIniciada = false;
    }
    else {
      // console.log("Ya hay una session iniciada: " + localStorage.getItem('user'));
      this.sesionIniciada = true
    }

  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      data: {}
    });
    dialogRef.beforeClosed().subscribe(result => {
      this.verifDatos();
    })
  }

  verifDatos() {
    localStorage.setItem('user', JSON.stringify(this.empleadosServicio.DatosPerfil));
    this.perfil = localStorage.getItem('user');
    this.perfil = JSON.parse(this.perfil);
    //console.log("Dialog cerrado: ",this.perfil);
    this.start = this.perfil.SesInic;


    if (this.start == "SI") {
      //console.log("SI: ",this.perfil);
      this.sesionIniciada = true;
      localStorage.setItem('user', JSON.stringify(this.perfil));
      this.toastr.success(this.perfil.TxtBDatos, "", { positionClass: 'toast-bottom-right' });
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    }

  }


  IraRecibos() {
    this.router.navigate(['/Recibos'])
  }

  irAInicio() {
    this.router.navigate(['/Inicio']);
  }
  irAValores() {
    this.router.navigate(['/Valores']);
  }
  irAInformacion() {
    this.router.navigate(['/Informacion']);
  }
  irAArea() {
    this.router.navigate(['/Area']);
  }
  irADirectorio() {
    this.router.navigate(['/Directorio']);
  }
  irAMisVis() {
    this.router.navigate(['/MisVis']);
  }
  irASistemaGestion(Area: string) {
    this.router.navigate(['/SistemaGestion', Area]);
  }
  irACapacitacion() {
    this.router.navigate(['/Capacitacion']);
  }
  irAPrivacidad() {
    this.router.navigate(['/Privacidad']);
  }
  irAMiCuenta() {
    this.router.navigate(['/MiCuenta']);
  }

  IrAQR() {
    this.router.navigate(['/GeneradorQR']);
  }

  IrASA() {
    this.router.navigate(['/SubidaAnuncio']);
  }

  Logout() {
    this.empleadosServicio.cerrarSesion().subscribe(resp => {
      //console.log(resp);
      this.sesionIniciada = false;
      this.start = "NO";
      this.perfil = {
        Respuesta: "",
        ADUser: "",
        ADAreaUsr: "Visita",
        SesInic: "",
      };
      localStorage.setItem('user', JSON.stringify(this.perfil));
      this.toastr.warning("Se cerro la sesion", "", { positionClass: 'toast-bottom-right' })
      //console.log(this.start);
      setTimeout(() => {
        window.location.reload();
      }, 1000);


    });
  }

}
