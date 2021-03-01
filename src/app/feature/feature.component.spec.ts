import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import { FeatureComponent } from './feature.component';

describe('FeatureComponent', () => {
  let component: FeatureComponent;
  let fixture: ComponentFixture<FeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureComponent ],
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
    fixture = TestBed.createComponent(FeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  it(`should have h2 as 'Product List Summary'`, () => {
    const fixture = TestBed.createComponent(FeatureComponent);
    const app = fixture.detectChanges();
    const appElement : HTMLElement = fixture.nativeElement;
    const h1: HTMLElement = appElement.querySelector('h2');
    expect(h1.textContent).toEqual('Product List Summary');
  });

  // it(`should render a text box to accept product name`, () => {
  //   const fixture = TestBed.createComponent(FeatureComponent);
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('input[type="text"][name="name"]')).toBeTruthy();
  //   });
});
