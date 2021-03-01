import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import { LogOutComponent } from './log-out.component';

describe('LogOutComponent', () => {
  let component: LogOutComponent;
  let fixture: ComponentFixture<LogOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogOutComponent ],
      imports:[
        RouterTestingModule,
        HttpClientModule,
        MatSnackBarModule,
        MatMenuModule],
      providers:[HttpClient]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });


  it(`should show p tag as 'You have Logged Out from Products Inventory Management'`, () => {
    const fixture = TestBed.createComponent(LogOutComponent);
  const compiled: HTMLElement = fixture.nativeElement;
  expect(compiled.querySelector('p').textContent).toEqual("You have Logged Out from Products Inventory Management")
  });
});
