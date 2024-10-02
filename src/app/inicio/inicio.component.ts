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
      //console.clear();
    }, 1000);

    this.servicioAnuncios.dataArray$.subscribe((dataArray) => {
      this.multimedia = dataArray;
      console.log("cant.datos: ",this.multimedia.length)
      const Elemento: any[]=this.multimedia;
      

      for (let index = 0; index < Elemento.length; index++) {
        console.log("Elemento",index,": ",Elemento[index]);
        this.slides[index]={
          src:Elemento[index].rutaArchivo,
          title: 'En desarrollo',
          subtitle: 'Elemento en desarrollo',
          tipo: Elemento[index].tipo,
        }

        
      }
      

      /*const Elemento1 = this.multimedia[0];
      const Elemento2 = this.multimedia[1];
      const Elemento3 = this.multimedia[2];
      const Elemento4 = this.multimedia[3];
      if (Elemento1.rutaArchivo) {
        this.slides[0] = {
          // id:Elemento1.id,
          src: Elemento1.rutaArchivo,
          title: 'En desarrollo',
          subtitle: 'Elemento en desarrollo',
          tipo: Elemento1.tipo,
        }
        console.log('Imagen 1:', this.multimedia[0]);
      } else {
        console.log("No hay Propiedad o no existe Ruta");
      }
      this.slides[1] = {
        // id:Elemento2.id,
        src: Elemento2.rutaArchivo,
        title: 'En desarrollo',
        subtitle: 'Elemento en desarrollo',
        tipo: Elemento2.tipo,
      }
      console.log('Imagen 2:', this.multimedia[1]);
      this.slides[2] = {
        //id:Elemento3.id,
        src: Elemento3.rutaArchivo,
        title: 'En desarrollo',
        subtitle: 'Elemento en desarrollo',
        tipo: Elemento3.tipo,
      }
      console.log('Imagen 3:', this.multimedia[2]);
      this.slides[3] = {
        src: Elemento4.rutaArchivo,
        title: 'En desarrollo',
        subtitle: 'Elemento en desarrollo',
        tipo: Elemento4.tipo,
      }
      console.log('Medio 4: ', this.multimedia[3]);*/

    });
  }

  ngOnInit(): void {

  }

  onItemChange($event: any): void {
    
  }





}
