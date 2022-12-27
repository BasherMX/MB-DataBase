import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechasImportantesNewComponent } from './fechas-importantes-new.component';

describe('FechasImportantesNewComponent', () => {
  let component: FechasImportantesNewComponent;
  let fixture: ComponentFixture<FechasImportantesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechasImportantesNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FechasImportantesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
