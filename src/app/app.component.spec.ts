import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthServiceService } from './auth-service.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatSnackBarModule,
        MatMenuModule
      ],
      declarations: [
        AppComponent
      ],
      providers:[HttpClient]
    }).compileComponents();
  });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  it(`should have as h1 'Products Inventory'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.detectChanges();
    const appElement : HTMLElement = fixture.nativeElement;
    const h1: HTMLElement = appElement.querySelector('h1');
    expect(h1.textContent).toEqual('Products Inventory');
  });

  // +it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('AngProductInventory app is running!');
  // });
});
