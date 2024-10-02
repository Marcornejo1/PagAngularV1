import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchivosService {

  private apiUrl = 'http://rcu.intranet/PHP/ArchivosSesion.php';
  private apiURL2 = 'http://rcu.intranet/PHP/SGestion.php';
  private apiURL3 = 'http://rcu.intranet/PHP/ArchivosCapacitacion.php';
  private Url='http://rcu.intranet/PHP/';
  constructor(private http: HttpClient) { }

  //Aqui va el metodo para obtener la lista de archivos
  obtenerArchivos(area:string): Observable<string[]> {
    const data={area:area}
    return this.http.post<string[]>(this.apiUrl,data);
  }

  ArchivosSistemaGestion(area: string): Observable<string[]> {
    console.log("Zona: ", area);
    const data = { area: area };
    return this.http.post<string[]>(this.apiURL2, data);
  }

  ArchivosCapacitacion(seccion: string): Observable<string[]> {
    console.log("Seccion: ", seccion);
    const data = { seccion: seccion };
    return this.http.post<string[]>(this.apiURL3, data);
  }

  SubirArchivosContabilidad(file:File){
    const formData=new FormData();
    formData.append('archivo',file);
    return this.http.post(this.Url+'SubirDocumentosConta.php',formData);
  }
  
  PedirArchivosContabilidad():Observable<any[]>{
    return this.http.get<any[]>(this.Url+'PedirArchivosActualizados.php');
  }

}
