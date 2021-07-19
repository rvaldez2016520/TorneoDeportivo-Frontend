import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePosicionesComponent } from './table-posiciones.component';

describe('TablePosicionesComponent', () => {
  let component: TablePosicionesComponent;
  let fixture: ComponentFixture<TablePosicionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePosicionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePosicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
