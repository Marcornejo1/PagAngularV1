import { Component,OnInit } from '@angular/core';
import { AnunciosService } from '../anuncios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  mostrar=false;
  multimedia: any[]=[
    {id:'', nombre:'', tipo:'', rutaArchivos:''}

  ];
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: '', tipo:''});

  constructor( private servicioAnuncios: AnunciosService, private router: Router) { 
    setTimeout(()=>{
      this.mostrar=true;
    },1000);

    this.servicioAnuncios.dataArray$.subscribe((dataArray)=>{
      this.multimedia=dataArray;
      const Elemento1=this.multimedia[0];
      const Elemento2=this.multimedia[1];
      const Elemento3=this.multimedia[2];

      this.slides[0]={

      }

      this.slides[1]={

      }

      this.slides[2]={

      }
      
    });
  }

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/img/I1.jpg',
    };
    this.slides[1] = {
      src: './assets/img/I2.jpg',
    }
    this.slides[2] = {
      src: './assets/img/I3.jpg',
    }
  }

  onItemChange($event: any): void {
    //console.log('Carousel onItemChange', $event);
  }

IrAQR(){
 this.router.navigate(['/GeneradorQR']);
}

}
