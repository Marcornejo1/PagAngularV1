import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ArchivosService } from '../archivos.service';

@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.component.html',
  styleUrl: './capacitacion.component.scss'
})
export class CapacitacionComponent {
  archivos: any[] = [];
  Carpeta:any;
  constructor(private servicioArchivos: ArchivosService) {
  }

  ngOnInit() {
    this.Seccion("ERP")
  }

  onTabSelected(event: any) {
    const tabLabel = event.tab.textLabel;
    this.Seccion(tabLabel);
  }

  Seccion(seccion: string) {
    this.Carpeta=seccion;
    this.servicioArchivos.ArchivosCapacitacion(seccion).subscribe(
      (data: any) => {
        this.archivos = data;

      }
    );

  }

  descargarArchivo(nombreArchivo:string):void{
    const rutaArchivo='http://rcu.intranet/Archivos/'+this.Carpeta+'/'+nombreArchivo;
    const link=document.createElement('a');
    link.href=rutaArchivo;
    link.download=nombreArchivo;
    link.click();

  }


}
