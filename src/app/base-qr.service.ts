import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseQRService {

  URL='http://rcu.intranet/PHP/'
  constructor(private http: HttpClient) { }

  ObtenerDatos():Observable<any>{
    return this.http.get(this.URL+'GestionDatosQR.php');
  }
  AgregarDatos(perfil:any):Observable<any>{
    return this.http.post(this.URL+'AgregarUsuarioQR.php',perfil)
  }
  EliminarDatos(ID:any):Observable<any>{
    return this.http.post(this.URL+'EliminarUsuarioQR.php',ID)
  }

  EditarDatos(perfil:any):Observable<any>{

    return this.http.post(this.URL+'EditarUsuarioQR.php',perfil)
  }
}
