import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogComponent ],
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
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have h2 as 'Warning'`, () => {
    const fixture = TestBed.createComponent(DialogComponent);
    const app = fixture.detectChanges();
    const appElement : HTMLElement = fixture.nativeElement;
    const h1: HTMLElement = appElement.querySelector('h2');
    expect(h1.textContent).toEqual('Warning');
  });
});
