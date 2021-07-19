import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepartidosComponent } from './createpartidos.component';

describe('CreatepartidosComponent', () => {
  let component: CreatepartidosComponent;
  let fixture: ComponentFixture<CreatepartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepartidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
