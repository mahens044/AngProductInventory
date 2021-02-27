import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopViewedProductComponent } from './top-viewed-product.component';

describe('TopViewedProductComponent', () => {
  let component: TopViewedProductComponent;
  let fixture: ComponentFixture<TopViewedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopViewedProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopViewedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
