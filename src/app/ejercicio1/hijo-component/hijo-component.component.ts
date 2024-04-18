import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo-component',
  standalone: true,
  imports: [],
  templateUrl: './hijo-component.component.html',
  styleUrl: './hijo-component.component.css'
})
export class HijoComponentComponent {
  @Input() mensaje: string = '';
}
