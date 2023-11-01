import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosDetalleComponent } from './alumnos-detalle.component';

describe('AlumnosDetalleComponent', () => {
  let component: AlumnosDetalleComponent;
  let fixture: ComponentFixture<AlumnosDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnosDetalleComponent]
    });
    fixture = TestBed.createComponent(AlumnosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
