import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrl: './cuenta.component.scss'
})
export class CuentaComponent {
  perfil: any;
  user: any;
  clave: any;
  constructor(private servicioEmpleados: EmpleadosService) {
    console.clear();
    const SessionValue = localStorage.getItem('user');
    console.log('Hola: ', SessionValue);
    this.perfil = SessionValue;
    this.perfil = JSON.parse(this.perfil);
    this.servicioEmpleados.SolicitarClave(this.perfil.ADUser).subscribe(
      (data: any) => {
        this.clave=data;
        console.log("Clave: ",this.clave);
      },
      (error) => {

      }
    );
  }

}
