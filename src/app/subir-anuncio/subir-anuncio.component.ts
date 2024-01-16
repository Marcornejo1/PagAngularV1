import { Component } from '@angular/core';
import { AnunciosService } from '../anuncios.service';

@Component({
  selector: 'app-subir-anuncio',
  templateUrl: './subir-anuncio.component.html',
  styleUrl: './subir-anuncio.component.scss'
})
export class SubirAnuncioComponent {

  constructor(private ServicioAnuncios: AnunciosService) { }

  anuncio = {
    Titulo: '',
    Tipo: '',
  }

  //Aqui esta la variable donde se colocara el archivo:
  selectedFile: File | null = null;

  //Se maneja el cambio de archivo subido por el usuario antes de enviarlo
  ArchivoSeleccionado(event: any): void {
    this.selectedFile=event.target.files[0];
    console.log('archivo: ',this.selectedFile);
  }

  //En esta funcion manejamos la logica del archivo y se manda la informacion al servicio:
  SubirArchivo(){
    if(this.selectedFile){
      this.ServicioAnuncios.SubirAnuncio(this.selectedFile).subscribe(
        (respuesta)=>{
          console.log('Se subio con exito', respuesta);
        },
        (error)=>{
          console.error('Error al subir: ',error);
        }
      );
    }
  }

}
