import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule, CarouselModule, CollapseModule, DropdownModule, GridModule, NavModule, NavbarModule, OffcanvasModule } from '@coreui/angular';
import { InicioComponent } from './inicio/inicio.component';
import { ValoresComponent } from './valores/valores.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { DirectorioComponent } from './directorio/directorio.component';

import { InformacionComponent } from './informacion/informacion.component';
import { AreaComponent } from './area/area.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatMenuModule } from '@angular/material/menu';;
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr'; 
import {MatTableModule} from '@angular/material/table';
import { SistemaGestionComponent } from './sistema-gestion/sistema-gestion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ValoresComponent,
    MisionVisionComponent,
    DirectorioComponent,
 
    InformacionComponent,
    AreaComponent,
    LoginComponent,
    NavbarComponent,
    SistemaGestionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavModule,
    NavbarModule,
    GridModule,    
    CollapseModule,
    DropdownModule,
    OffcanvasModule,
    CarouselModule,
    ButtonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatGridListModule,
    HttpClientModule,
    MatTableModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
