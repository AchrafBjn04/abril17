import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturasSeleccionadaComponent } from './asignaturas-seleccionada.component';

describe('AsignaturasSeleccionadaComponent', () => {
  let component: AsignaturasSeleccionadaComponent;
  let fixture: ComponentFixture<AsignaturasSeleccionadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignaturasSeleccionadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsignaturasSeleccionadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
