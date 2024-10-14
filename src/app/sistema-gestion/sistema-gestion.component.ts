import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArchivosService } from '../archivos.service';

@Component({
  selector: 'app-sistema-gestion',
  templateUrl: './sistema-gestion.component.html',
  styleUrl: './sistema-gestion.component.scss'
})
export class SistemaGestionComponent {
  area: any;
  archivos: any[] = [];
  archivosact: any[] = [];
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private servicioArchivos: ArchivosService) {
    this.route.params.subscribe(params => {
      this.area = params['area'];
      this.servicioArchivos.ArchivosSistemaGestion(this.area).subscribe(
        (data: any) => {
          this.archivos = data;
        },
        (error) => {
          this.archivos = [];
          console.error("No hay archivos o fallo la lectura: ", error);
        }
      );
    });

    this.servicioArchivos.PedirArchivosContabilidad().subscribe(
      (data:any)=>{
        this.archivosact=data;
      }
    );




  }

  descargarArchivo(nombreArchivo: string): void {
    const rutaArchivo = 'http://rcu.intranet/Archivos/' + this.area + '/' + nombreArchivo;
    const link = document.createElement('a');
    link.href = rutaArchivo;
    link.download = nombreArchivo;
    link.click();

  }

}
