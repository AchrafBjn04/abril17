import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosCestaComponent } from './productos-cesta.component';

describe('ProductosCestaComponent', () => {
  let component: ProductosCestaComponent;
  let fixture: ComponentFixture<ProductosCestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosCestaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosCestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
