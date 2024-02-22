import { Component } from '@angular/core';

@Component({
  selector: 'app-recibos',
  templateUrl: './recibos.component.html',
  styleUrl: './recibos.component.scss'
})
export class RecibosComponent {
  date: Date[] | undefined;
}
