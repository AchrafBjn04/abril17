import { Component } from '@angular/core';
import { ListaProductosComponent } from '../lista-productos/lista-productos.component';

@Component({
  selector: 'app-productos-cesta',
  standalone: true,
  imports: [ListaProductosComponent],
  templateUrl: './productos-cesta.component.html',
  styleUrl: './productos-cesta.component.css'
})
export class ProductosCestaComponent {
  cesta: string[];
  
  constructor() {
    this.cesta = [];
  }

  anyadirProductos(producto: string){
    this.cesta.push(producto);
  }
}
