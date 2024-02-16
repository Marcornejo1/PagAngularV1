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

  constructor(private http: HttpClient) { }

  //Aqui va el metodo para obtener la lista de archivos
  obtenerArchivos(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
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
}
