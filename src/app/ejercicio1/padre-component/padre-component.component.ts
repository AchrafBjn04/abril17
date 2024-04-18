import { Component } from '@angular/core';
import { HijoComponentComponent } from '../hijo-component/hijo-component.component';

@Component({
  selector: 'app-padre-component',
  standalone: true,
  imports: [HijoComponentComponent],
  templateUrl: './padre-component.component.html',
  styleUrl: './padre-component.component.css'
})
export class PadreComponentComponent {
  mensaje: string = "Hola, soy tu padre.";
}
