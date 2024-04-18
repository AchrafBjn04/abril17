import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarNombreComponent } from './agregar-nombre.component';

describe('AgregarNombreComponent', () => {
  let component: AgregarNombreComponent;
  let fixture: ComponentFixture<AgregarNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarNombreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
