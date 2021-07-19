import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetorneoComponent } from './createtorneo.component';

describe('CreatetorneoComponent', () => {
  let component: CreatetorneoComponent;
  let fixture: ComponentFixture<CreatetorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatetorneoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
