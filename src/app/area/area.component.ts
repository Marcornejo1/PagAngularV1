import { Component } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrl: './area.component.scss'
})
export class AreaComponent {
  perfil: any;
  constructor() {
    const SessionValue = localStorage.getItem('user');
    console.log('Hola: ', SessionValue);
    this.perfil = SessionValue;
    this.perfil = JSON.parse(this.perfil);
  }

}
