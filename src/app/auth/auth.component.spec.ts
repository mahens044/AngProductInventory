import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import { AuthComponent } from './auth.component';
import { RouterTestingModule } from '@angular/router/testing';
import {MatDialogModule} from '@angular/material/dialog';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthComponent ],
      imports:[
        RouterTestingModule,
        HttpClientModule,
        MatSnackBarModule,
        MatMenuModule,
        MatDialogModule],
      providers:[HttpClient]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it(`should render a text box to accept email`, () => {
      const fixture = TestBed.createComponent(AuthComponent);
      const compiled = fixture.nativeElement;
      expect(compiled.querySelectorAll('input[type="email"][name="email"]')).toBeTruthy();
      });

  it(`should render a text box to accept password`, () => {
        const fixture = TestBed.createComponent(AuthComponent);
        const compiled = fixture.nativeElement;
        expect(compiled.querySelectorAll('input[type="password"][name="password"]')).toBeTruthy();
        });

  it(`should render a text box to accept first name`, () => {
          const fixture = TestBed.createComponent(AuthComponent);
          const compiled = fixture.nativeElement;
          expect(compiled.querySelectorAll('input[type="text"][name="First"]')).toBeTruthy();
          });

  it(`should render a text box to accept last name`, () => {
            const fixture = TestBed.createComponent(AuthComponent);
            const compiled = fixture.nativeElement;
            expect(compiled.querySelectorAll('input[type="text"][name="Last"]')).toBeTruthy();
            });

  it(`should render a text box to accept mobile number`, () => {
              const fixture = TestBed.createComponent(AuthComponent);
              const compiled = fixture.nativeElement;
              expect(compiled.querySelectorAll('input[type="tel"][name="mobile"]')).toBeTruthy();
              });
});
