import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {
  private dataArrayS:BehaviorSubject<any[]>=new BehaviorSubject<any[]>([]);
  dataArray$:Observable<any[]>=this.dataArrayS.asObservable();
  private Url='http://rcu.intranet/PHP/';

  constructor(private http:HttpClient) { }

  SubirAnuncio(file:File, option:string){
    const formData=new FormData();
      formData.append('prioridad', option);
      formData.append('archivo', file);

    return this.http.post(this.Url+'SubirAnuncio.php',formData);
  }

  PedirArchivos(): Observable<any[]>{
    return this.http.get<any[]>(this.Url+'PedirAnuncios.php');
  }

  setDataArray(dataArray:any[]){
    this.dataArrayS.next(dataArray);
  }
}
