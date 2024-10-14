import { Component } from '@angular/core';
import { AnunciosService } from '../anuncios.service';
import { ToastrService } from 'ngx-toastr';
import { ArchivosService } from '../archivos.service';

@Component({
  selector: 'app-subida-archivos-contabilidad',
  templateUrl: './subida-archivos-contabilidad.component.html',
  styleUrl: './subida-archivos-contabilidad.component.scss'
})
export class SubidaArchivosContabilidadComponent {
  constructor(private servicioDocumentos: ArchivosService, private toastr: ToastrService) { }

  archivo = {
    Titulo: '',
    Tipo: '',
  }

  //Aqui esta la variable donde se colocara el archivo:
  selectedFile: File | null = null;

  //Se maneja el cambio de archivo subido por el usuario antes de enviarlo
  ArchivoSeleccionado(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  //En esta funcion manejamos la logica del archivo y se manda la informacion al servicio:
  SubirArchivo(){
    if(this.selectedFile){
      this.servicioDocumentos.SubirArchivosContabilidad(this.selectedFile).subscribe(
        (respuesta)=>{
          this.toastr.success("Se envio correctamente el archivo","",{positionClass:'toast-bottom-right'})
        },
        (error)=>{
          console.error('Error al subir: ',error);
        }
      );
    }
  }

}
