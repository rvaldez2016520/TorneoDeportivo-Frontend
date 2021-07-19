import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListorneoComponent } from './listorneo.component';

describe('ListorneoComponent', () => {
  let component: ListorneoComponent;
  let fixture: ComponentFixture<ListorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListorneoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
