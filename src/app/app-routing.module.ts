import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ValoresComponent } from './valores/valores.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { InformacionComponent } from './informacion/informacion.component';
import { AreaComponent } from './area/area.component';
import { SistemaGestionComponent } from './sistema-gestion/sistema-gestion.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'Inicio',component:InicioComponent},
  {path:'Valores',component:ValoresComponent},
  {path:'MisVis',component:MisionVisionComponent},
  {path:'Directorio',component:DirectorioComponent},
  {path:'Area',component:AreaComponent},
  {path:'Informacion',component:InformacionComponent},
  {path:'SistemaGestion/:area',component:SistemaGestionComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
