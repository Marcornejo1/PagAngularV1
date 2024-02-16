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
import { MatTableModule } from '@angular/material/table';
import { SistemaGestionComponent } from './sistema-gestion/sistema-gestion.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { GeneradorQRComponent } from './generador-qr/generador-qr.component';
import { QRCodeModule } from 'angularx-qrcode';
import { SpinnerModule } from '@coreui/angular';
import {MatTabsModule} from '@angular/material/tabs';
import { QRCodeComponent } from 'angularx-qrcode/public-api';
import { SubirAnuncioComponent } from './subir-anuncio/subir-anuncio.component';
import { CapacitacionComponent } from './capacitacion/capacitacion.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';

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
    CuentaComponent,
    GeneradorQRComponent,
    SubirAnuncioComponent,
    CapacitacionComponent,
    PrivacidadComponent,

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
    QRCodeModule,
    SpinnerModule,
    MatTabsModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
