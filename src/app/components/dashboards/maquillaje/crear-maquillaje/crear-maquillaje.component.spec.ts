import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMaquillajeComponent } from './crear-maquillaje.component';

describe('CrearMaquillajeComponent', () => {
  let component: CrearMaquillajeComponent;
  let fixture: ComponentFixture<CrearMaquillajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearMaquillajeComponent]
    });
    fixture = TestBed.createComponent(CrearMaquillajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
