import { Component } from '@angular/core';
import { Calendar } from 'primeng/calendar';
import { RecibosService } from '../recibos.service';

@Component({
  selector: 'app-recibos',
  templateUrl: './recibos.component.html',
  styleUrl: './recibos.component.scss'
})
export class RecibosComponent {
  perfil: any;
  constructor(private servicioRecibos: RecibosService) {
    const SessionValue = localStorage.getItem('user');
    this.perfil = SessionValue;
    this.perfil = JSON.parse(this.perfil);
    this.ElegirFecha(this.selectedDate);

  }
  archivos: any[] = [];
  date: Date[] | undefined;
  selectedDate: Date = new Date();
  FormattedDate: string | undefined;
  tieneArchivo: boolean = false;


  ElegirFecha(event: any) {
    let Mes = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let NombreMes = ['1. ENERO', '2. FEBRERO', '3. MARZO', '4. ABRIL', '5. MAYO', '6. JUNIO', '7. JULIO', '8. AGOSTO', '9. SEPTIEMBRE', '10. OCTUBRE', '11. NOVIEMBRE', '12. DICIEMBRE'];
    this.selectedDate = event;
    const year = this.selectedDate.getFullYear();
    const month = Mes[this.selectedDate.getMonth()];
    const MonthName = NombreMes[this.selectedDate.getMonth()];
    this.perfil.Mes = MonthName;
    this.perfil.Year = year;
    this.FormattedDate = `${month}/${year}`;
    switch (this.perfil.ADAreaUsr) {
      case 'Direccion Tecnologica':
        this.perfil.gerencia = 'GERENCIA DE TECNOLOGIA';
        break;
      case 'Recursos Humanos':
        this.perfil.gerencia = 'GERENCIA DE RECURSOS HUMANOS';
        break;
      case 'Contabilidad y Finanzas':
        this.perfil.gerencia = 'GERENCIA DE TESORERIA'
        break;
      case 'Seguridad':
        this.perfil.gerencia = 'GERENCIA DE SEGURIDAD'
        break;
      case 'Direccion de Proyectos':
        this.perfil.gerencia = 'GERENCIA DE PROYECTOS'
        break;
      case 'Direccion Operativa':
        this.perfil.gerencia = 'GERENCIA DE OPERACIONES'
        break;
      case 'Operativos':
        this.perfil.gerencia = 'GERENCIA DE OPERACIONES'
        break;
      case '--':
        this.perfil.gerencia = 'GERENCIA DE MONITOREO'
        break;
      case 'Control y Seguimiento':
        this.perfil.gerencia = 'GERENCIA DE IMPLEMENTACION Y SEGUIMIENTO DE PROYECTOS'
        break;
      case 'Direccion General':
        this.perfil.gerencia = 'DIRECCION GENERAL'
        break;
      case 'Comercializacion':
        this.perfil.gerencia = 'GERENCIA DE COMERCIALIZACION'
        break;


    }

    console.log(this.perfil);
    this.EnviarFecha(this.perfil);

  }

  EnviarFecha(perfil: any) {
    //console.log(date);
    this.servicioRecibos.MandarFecha(perfil).subscribe(
      (response: any) => {
        if (response == 'NO') {
          this.tieneArchivo = false;
          console.log("No hay Archivos");
        } else if (response == 'NO-DIR') {
          this.tieneArchivo = false;
          console.log("No existe el directorio");
        } else {
          this.tieneArchivo = true;
          this.archivos = response;
          console.log('Respuesta: ', this.archivos);
        }
      }, (error) => {
        console.error('Error: ', error);
      });
  }

  descargarArchivo(nombreArchivo: string): void {
    const rutaArchivo = 'http://rcu.intranet/Archivos/RFC-Recibos' + this.perfil.gerencia + '/' + this.perfil.RFC + '/' + nombreArchivo;
    const link = document.createElement('a');
    link.href = rutaArchivo;
    link.download = nombreArchivo;
    link.click();
  }
}

