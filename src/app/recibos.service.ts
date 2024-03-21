import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecibosService {

  URL='http://rcu.intranet/PHP/'
  constructor(private http: HttpClient) { }

  MandarFecha(perfil:any):Observable<any>{
    console.log('datos a enviar: ',perfil);
    return this.http.post(this.URL+'PedirRecibos.php',perfil);
  }

}
