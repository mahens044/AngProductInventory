import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUnauthorizedComponent } from './dialog-unauthorized.component';

describe('DialogUnauthorizedComponent', () => {
  let component: DialogUnauthorizedComponent;
  let fixture: ComponentFixture<DialogUnauthorizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUnauthorizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUnauthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
