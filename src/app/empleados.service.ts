import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  DatosPerfil:any={};

  URL='http://rcu.intranet/PHP/'
  constructor(private http:HttpClient) { }

  enviarDatos(datos:any): Observable<any>{
    console.error("Datos enviados: ",datos);
    return this.http.post (this.URL+'EnviarDatos.php',datos);
  }

  cerrarSesion(){
    console.error("Cerrando Sesion...")
    return this.http.get(this.URL+'Logout.php');
  }

}
