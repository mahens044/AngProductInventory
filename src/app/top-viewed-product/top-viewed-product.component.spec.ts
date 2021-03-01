import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TopViewedProductComponent } from './top-viewed-product.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
describe('TopViewedProductComponent', () => {
  let component: TopViewedProductComponent;
  let fixture: ComponentFixture<TopViewedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopViewedProductComponent ],
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
    fixture = TestBed.createComponent(TopViewedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

   it(`should show label 1 as 'Show Top '`, () => {
    const fixture = TestBed.createComponent(TopViewedProductComponent);
  const compiled: HTMLElement = fixture.nativeElement;
  expect(compiled.querySelectorAll('label')[0].textContent).toEqual("Show top ")
  });

  it(`should show label 2 as 'viewed products'`, () => {
    const fixture = TestBed.createComponent(TopViewedProductComponent);
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[1].textContent).toEqual(" viewed products")
    });
});
