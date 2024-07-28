import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPaymentPageComponent } from './products-payment-page.component';

describe('ProductsPaymentPageComponent', () => {
  let component: ProductsPaymentPageComponent;
  let fixture: ComponentFixture<ProductsPaymentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsPaymentPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsPaymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
