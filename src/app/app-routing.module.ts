import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ValoresComponent } from './valores/valores.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { InformacionComponent } from './informacion/informacion.component';
import { AreaComponent } from './area/area.component';
import { SistemaGestionComponent } from './sistema-gestion/sistema-gestion.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { GeneradorQRComponent } from './generador-qr/generador-qr.component';
import { SubirAnuncioComponent } from './subir-anuncio/subir-anuncio.component';
import { CapacitacionComponent } from './capacitacion/capacitacion.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { RecibosComponent } from './recibos/recibos.component';
import { SubidaRecibosNomComponent } from './subida-recibos-nom/subida-recibos-nom.component';
import { SubidaArchivosContabilidadComponent } from './subida-archivos-contabilidad/subida-archivos-contabilidad.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'Inicio',component:InicioComponent},
  {path:'Valores',component:ValoresComponent},
  {path:'MisVis',component:MisionVisionComponent},
  {path:'Directorio',component:DirectorioComponent},
  {path:'Area',component:AreaComponent},
  {path:'Informacion',component:InformacionComponent},
  {path:'MiCuenta',component:CuentaComponent},
  {path:'GeneradorQR',component:GeneradorQRComponent},
  {path:'SubidaAnuncio',component:SubirAnuncioComponent},
  {path:'Capacitacion',component:CapacitacionComponent},
  {path:'Privacidad',component:PrivacidadComponent},
  {path:'SistemaGestion/:area',component:SistemaGestionComponent},
  {path:'Recibos',component:RecibosComponent},
  {path:'SubirRecibos',component:SubidaRecibosNomComponent},
  {path:'SubirDocumentosC',component:SubidaArchivosContabilidadComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
