import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArchivosService } from '../archivos.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrl: './area.component.scss'
})
export class AreaComponent {
  perfil: any;
  archivos: any[] = [];
  Area:any;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private servicioArchivos: ArchivosService) {
    const SessionValue = localStorage.getItem('user');
    
    this.perfil = SessionValue;
    this.perfil = JSON.parse(this.perfil);
    this.Area=this.perfil.ADAreaUsr;
    
    
    this.servicioArchivos.obtenerArchivos(this.Area).subscribe(data => {
      if(data){
        this.archivos=data;
      }else{
        this.archivos=[];
      }
    });
  }

  descargarArchivo(nombreArchivo:string):void{
    const rutaArchivo='http://rcu.intranet/Archivos/ARCHIVOS-PRIVADOS'+this.perfil.ADAreaUsr+'/'+nombreArchivo;
    const link=document.createElement('a');
    link.href=rutaArchivo;
    link.download=nombreArchivo;
    link.click();
  }

}
