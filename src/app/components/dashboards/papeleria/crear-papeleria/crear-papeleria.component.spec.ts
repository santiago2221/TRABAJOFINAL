import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPapeleriaComponent } from './crear-papeleria.component';

describe('CrearPapeleriaComponent', () => {
  let component: CrearPapeleriaComponent;
  let fixture: ComponentFixture<CrearPapeleriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearPapeleriaComponent]
    });
    fixture = TestBed.createComponent(CrearPapeleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
