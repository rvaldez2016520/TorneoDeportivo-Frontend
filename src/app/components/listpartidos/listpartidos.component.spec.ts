import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpartidosComponent } from './listpartidos.component';

describe('ListpartidosComponent', () => {
  let component: ListpartidosComponent;
  let fixture: ComponentFixture<ListpartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpartidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
