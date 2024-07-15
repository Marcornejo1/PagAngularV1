import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { BaseQRService } from '../base-qr.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AdminBaseQRComponent } from '../admin-base-qr/admin-base-qr.component';

declare const generateQR: any;
@Component({
  selector: 'app-generador-qr',
  templateUrl: './generador-qr.component.html',
  styleUrl: './generador-qr.component.scss'
})
export class GeneradorQRComponent {
  isChecked=false;
  datos:any[]=[];
  Fselecc:any='';

  isSelected=false;

  displayedColumns:string[]=['Id','Nombre','Username','ClaveQR','Area','Nivel','RFC'];
  
  dataSource!: MatTableDataSource<UserData>;

  constructor(private http: HttpClient,private router: Router,private ServicioQR:BaseQRService, public dialog: MatDialog, private toastr: ToastrService){
    this.ServicioQR.ObtenerDatos().subscribe(
      (data:any)=>{
        
        this.datos=data;
        this.dataSource=new MatTableDataSource(this.datos);
        
      },
      (error)=>{
        this.datos=[];
        console.error("Error: ",error);
      }

    );
  }

  QRInput: string='';
  TextoQR: string='';
  url: SafeUrl = '';
  GenQR() {
    console.log("Input: "+this.QRInput)
    this.TextoQR = "https://aplicaciones02rcu.com.mx:3000/Acceso.php?usuario=" + this.QRInput;
  }

  onCodeChange(url: SafeUrl) {
    console.log(url);
    this.url = url;
  }
  
click(row:any){
  this.Fselecc=row;
  this.QRInput=this.Fselecc.Username;
  this.isSelected=true;
  console.log(this.Fselecc);
}

agregar(){
  const dialogRef=this.dialog.open(AdminBaseQRComponent,{
    data:{
      Instruccion:'Agregar',
      Perfil:this.Fselecc
    }
  });
  dialogRef.beforeClosed().subscribe(result=>{

  })
}

editar(){
  const dialogRef=this.dialog.open(AdminBaseQRComponent,{
    data:{
      Instruccion:'Editar',
      Perfil:this.Fselecc
    }
  });
  dialogRef.beforeClosed().subscribe(result=>{

  });
}

eliminar(){
  const dialogRef=this.dialog.open(AdminBaseQRComponent,{
    data:{
      Instruccion:'Eliminar',
      Perfil:this.Fselecc
    }
  });
  dialogRef.beforeClosed().subscribe(result=>{
    
  });
}

  
applyFilter(event:Event){
  const filterValue=(event.target as HTMLInputElement).value;
  this.dataSource.filter=filterValue.trim().toLowerCase();
}

}
export interface UserData{
  Id:string;
  Nombre:string;
  Username:string;
  ClaveQR:string;
  Area:string;
  Nivel:string;
  RFC:string;
}