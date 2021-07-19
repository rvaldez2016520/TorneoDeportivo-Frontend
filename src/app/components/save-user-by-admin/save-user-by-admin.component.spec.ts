import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveUserByAdminComponent } from './save-user-by-admin.component';

describe('SaveUserByAdminComponent', () => {
  let component: SaveUserByAdminComponent;
  let fixture: ComponentFixture<SaveUserByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveUserByAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveUserByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
