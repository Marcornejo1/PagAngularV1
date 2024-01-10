import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
declare const generateQR: any;
@Component({
  selector: 'app-generador-qr',
  templateUrl: './generador-qr.component.html',
  styleUrl: './generador-qr.component.scss'
})
export class GeneradorQRComponent {

  QRInput: string='';
  TextoQR: string='';
  url: SafeUrl = '';
  GenQR() {
    this.TextoQR = "https://aplicaciones02rcu.com.mx:3000/Acceso.php?usuario=" + this.QRInput;
  }

  onCodeChange(url: SafeUrl) {
    console.log(url);
    this.url = url;
  }


}
