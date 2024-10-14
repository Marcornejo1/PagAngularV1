import { Component, OnInit } from '@angular/core';
import { AnunciosService } from '../anuncios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  mostrar = false;
  multimedia: any[] = [
    { id: '', nombre: '', tipo: '', rutaArchivos: '' }

  ];
  slides: any[] = new Array().fill({ id: -1, src: '', title: '', subtitle: '', tipo: '' });

  constructor(private servicioAnuncios: AnunciosService, private router: Router) {

    setTimeout(() => {
      this.mostrar = true;
    }, 1000);

    this.servicioAnuncios.dataArray$.subscribe((dataArray) => {
      this.multimedia = dataArray;
      const Elemento: any[]=this.multimedia;
      

      for (let index = 0; index < Elemento.length; index++) {
        this.slides[index]={
          src:Elemento[index].rutaArchivo,
          title: 'En desarrollo',
          subtitle: 'Elemento en desarrollo',
          tipo: Elemento[index].tipo,
        }

        
      }
      
    });
  }

  ngOnInit(): void {

  }

  onItemChange($event: any): void {
    
  }





}
