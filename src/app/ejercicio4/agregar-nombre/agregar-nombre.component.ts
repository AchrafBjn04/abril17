import { Component, EventEmitter, Output } from '@angular/core';
import { ListaNombresComponent } from '../lista-nombres/lista-nombres.component';
import { Person } from '../_modulo/Person';

@Component({
  selector: 'app-agregar-nombre',
  standalone: true,
  imports: [ListaNombresComponent],
  templateUrl: './agregar-nombre.component.html',
  styleUrl: './agregar-nombre.component.css'
})
export class AgregarNombreComponent {
  contenedorPersonas : Person[] = [];

  validarPersona(persona : Person){
    console.log(`Producto recibido con nombre: ${persona.nombre}` )
    if(!this.contenedorPersonas.includes(persona)) this.contenedorPersonas.push(persona);
    else alert(`La persona ${persona.nombre} ya está en la lista`)
  }

  deleteUltimaPersona(){this.contenedorPersonas.pop()}

  mayorDeEdad(){
    let arregloFiltrado : Person[] = this.contenedorPersonas.filter(p => p.edad > 18);
    this.contenedorPersonas = arregloFiltrado;
  }

  dobleEdad(){
    let arregloFiltrado : Person[] = this.contenedorPersonas.map(p => {
      return{
        nombre: p.nombre,
        edad: p.edad*2
      }
    });
    this.contenedorPersonas = arregloFiltrado;
  }
}