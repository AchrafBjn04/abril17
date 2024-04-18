import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Person } from '../_modulo/Person';

@Component({
  selector: 'app-lista-nombres',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lista-nombres.component.html',
  styleUrl: './lista-nombres.component.css'
})
export class ListaNombresComponent {
  nombre : string = '';
  edad : number = 0;

  @Output()
  emitter = new EventEmitter<Person>();

  sendPerson(){
    let persona: Person = {
      nombre : this.nombre,
      edad : this.edad
    };
    this.emitter.emit(persona);
  }
}
