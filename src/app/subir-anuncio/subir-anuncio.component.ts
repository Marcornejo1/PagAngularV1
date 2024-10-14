import { Component } from '@angular/core';
import { AnunciosService } from '../anuncios.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subir-anuncio',
  templateUrl: './subir-anuncio.component.html',
  styleUrl: './subir-anuncio.component.scss'
})
export class SubirAnuncioComponent {
  archivo: File | null = null;
  prioridad!: '';

  constructor(private ServicioAnuncios: AnunciosService, private toastr:ToastrService) { }

  

  //Aqui esta la variable donde se colocara el archivo:
  selectedFile: File | null = null;

  //Se maneja el cambio de archivo subido por el usuario antes de enviarlo
  ArchivoSeleccionado(event: any): void {
    this.selectedFile=event.target.files[0];
    this.archivo=this.selectedFile;
  }

  //En esta funcion manejamos la logica del archivo y se manda la informacion al servicio:
  SubirArchivo(){
    if(this.archivo){
      this.ServicioAnuncios.SubirAnuncio(this.archivo,this.prioridad).subscribe(
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
