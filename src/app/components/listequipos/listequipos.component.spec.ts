import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListequiposComponent } from './listequipos.component';

describe('ListequiposComponent', () => {
  let component: ListequiposComponent;
  let fixture: ComponentFixture<ListequiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListequiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListequiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
