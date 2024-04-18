import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-asignaturas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './asignaturas.component.html',
  styleUrl: './asignaturas.component.css'
})
export class AsignaturasComponent {
  @Output()
  emitter: EventEmitter<string> = new EventEmitter();
  asignaturas: string[] = ['Programación en Java', 'JSON', 'JS'];
  asignaturaSeleccionada: string = '';

  addAsignaturas(){
    this.emitter.emit(this.asignaturaSeleccionada);
  }
}
