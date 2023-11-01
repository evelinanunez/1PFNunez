import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosTablaComponent } from './cursos-tabla.component';

describe('CursosTablaComponent', () => {
  let component: CursosTablaComponent;
  let fixture: ComponentFixture<CursosTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursosTablaComponent]
    });
    fixture = TestBed.createComponent(CursosTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
