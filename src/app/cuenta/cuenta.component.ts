import { Component } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrl: './cuenta.component.scss'
})
export class CuentaComponent {
  perfil:any;
  constructor(){
    const SessionValue=localStorage.getItem('user');
    console.log('Hola: ',SessionValue);
    this.perfil=SessionValue;
    this.perfil=JSON.parse(this.perfil);
  }

}
