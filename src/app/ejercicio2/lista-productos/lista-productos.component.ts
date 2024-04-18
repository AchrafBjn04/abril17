import { Component, EventEmitter, Output } from '@angular/core';
import { ProductosCestaComponent } from '../productos-cesta/productos-cesta.component';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [ProductosCestaComponent],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  @Output()
  emitter: EventEmitter<string> = new EventEmitter();
  listaProductos: string[] = ['leche', 'pan', 'café', 'azúcar', 'huevos', 'plátanos'];

  addProductosACesta(producto: string){
    this.emitter.emit(producto);
  }
}
