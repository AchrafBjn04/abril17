import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponentComponent } from './ejercicio1/hijo-component/hijo-component.component';
import { PadreComponentComponent } from './ejercicio1/padre-component/padre-component.component';
import { ListaProductosComponent } from './ejercicio2/lista-productos/lista-productos.component';
import { ProductosCestaComponent } from './ejercicio2/productos-cesta/productos-cesta.component';
import { AsignaturasSeleccionadaComponent } from './ejercicio3/asignaturas-seleccionada/asignaturas-seleccionada.component';
import { AgregarNombreComponent } from './ejercicio4/agregar-nombre/agregar-nombre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgregarNombreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'abril17';
}
