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
       // id:Elemento1.id,
        src:Elemento1.rutaArchivo,
        title:'En desarrollo',
        subtitle:'Elemento en desarrollo',
        tipo:Elemento1.tipo,
      }
      console.log('Imagen 1:', this.multimedia[0]);
      this.slides[1]={
       // id:Elemento2.id,
        src:Elemento2.rutaArchivo,
        title:'En desarrollo',
        subtitle:'Elemento en desarrollo',
        tipo:Elemento2.tipo,
      }
      console.log('Imagen 2:', this.multimedia[1]);
      this.slides[2]={
        //id:Elemento3.id,
        src:Elemento3.rutaArchivo,
        title:'En desarrollo',
        subtitle:'Elemento en desarrollo',
        tipo:Elemento3.tipo,
      }
      console.log('Imagen 3:', this.multimedia[2]);
    });
  }

  ngOnInit(): void {

  }

  onItemChange($event: any): void {
    //console.log('Carousel onItemChange', $event);
  }

IrAQR(){
 this.router.navigate(['/GeneradorQR']);
}

IrASA(){
  this.router.navigate(['/SubidaAnuncio']);
 }

}
