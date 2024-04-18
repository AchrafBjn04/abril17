import { Component } from '@angular/core';
import { AsignaturasComponent } from '../asignaturas/asignaturas.component';

@Component({
  selector: 'app-asignaturas-seleccionada',
  standalone: true,
  imports: [AsignaturasComponent],
  templateUrl: './asignaturas-seleccionada.component.html',
  styleUrl: './asignaturas-seleccionada.component.css'
})
export class AsignaturasSeleccionadaComponent {
  asignaturasSeleccionadas: string[] = [];
  
  addAsignaturas(asignatura: string){
    this.asignaturasSeleccionadas.push(asignatura);
  }
}
