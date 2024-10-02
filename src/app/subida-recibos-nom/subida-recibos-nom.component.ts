import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaseQRService } from '../base-qr.service';
import { SafeUrl } from '@angular/platform-browser';
import { AdminBaseQRComponent } from '../admin-base-qr/admin-base-qr.component';
import { RecibosService } from '../recibos.service';

@Component({
  selector: 'app-subida-recibos-nom',
  templateUrl: './subida-recibos-nom.component.html',
  styleUrl: './subida-recibos-nom.component.scss'
})
export class SubidaRecibosNomComponent {
  isChecked = false;

  Fselecc: any = '';
  url: SafeUrl = '';
  isSelected = false;

  displayedColumns: string[] = ['Id', 'Nombre', 'Username', 'ClaveQR', 'Area', 'Nivel', 'RFC'];

  dataSource!: MatTableDataSource<UserData>;

  //Aqui esta la variable donde se colocara el archivo:
  selectedFile: File | null = null;

  //Aqui van los datos a enviar:
  datos: any[] = [];

  constructor(private http: HttpClient, private router: Router, private ServicioQR: BaseQRService, public dialog: MatDialog, private toastr: ToastrService, private SerbicioRecibos: RecibosService) {
    this.ServicioQR.ObtenerDatos().subscribe(
      (data: any) => {

        this.datos = data;
        this.dataSource = new MatTableDataSource(this.datos);

      },
      (error) => {
        this.datos = [];
        console.error("Error: ", error);
      }

    );

  }

  onCodeChange(url: SafeUrl) {
    console.log(url);
    this.url = url;
  }
  click(row: any) {
    this.Fselecc = row;

    this.isSelected = true;
    console.log(this.Fselecc);
  }

  agregar() {
    const dialogRef = this.dialog.open(AdminBaseQRComponent, {
      data: {
        Instruccion: 'Agregar',
        Perfil: this.Fselecc
      }
    });
    dialogRef.beforeClosed().subscribe(result => {

    })
  }

  eliminar() {
    const dialogRef = this.dialog.open(AdminBaseQRComponent, {
      data: {
        Instruccion: 'Eliminar',
        Perfil: this.Fselecc
      }
    });
    dialogRef.beforeClosed().subscribe(result => {

    });
  }

  SubirArchivo() {
    const Datos = new FormData();
    if (this.selectedFile && this.Fselecc!=null) {
      Datos.append('Archivo', this.selectedFile);
      Datos.append('Nombre',this.Fselecc.Nombre);
      Datos.append('Usuario',this.Fselecc.Username);
      Datos.append('Area',this.Fselecc.Area);
      Datos.append('Nivel',this.Fselecc.Nivel);
      Datos.append('RFC',this.Fselecc.RFC);

      this.SerbicioRecibos.SubirRecibo(Datos).subscribe(
        (respuesta) => {
          console.log('Se subio con exito', respuesta);
          this.toastr.success("Se envio correctamente el archivo", "", { positionClass: 'toast-bottom-right' })
        },
        (error) => {
          console.error('Error al subir: ', error);
        }
      );
    }
  }

  //Se maneja el cambio de archivo subido por el usuario antes de enviarlo
  ArchivoSeleccionado(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log('archivo: ', this.selectedFile);

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}




export interface UserData {
  Id: string;
  Nombre: string;
  Username: string;
  ClaveQR: string;
  Area: string;
  Nivel: string;
  RFC: string;
}
