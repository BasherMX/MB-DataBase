import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechasImportantesComponent } from './fechas-importantes.component';

describe('FechasImportantesComponent', () => {
  let component: FechasImportantesComponent;
  let fixture: ComponentFixture<FechasImportantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechasImportantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FechasImportantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
