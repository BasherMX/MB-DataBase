import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechasImportantesEditComponent } from './fechas-importantes-edit.component';

describe('FechasImportantesEditComponent', () => {
  let component: FechasImportantesEditComponent;
  let fixture: ComponentFixture<FechasImportantesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechasImportantesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FechasImportantesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
