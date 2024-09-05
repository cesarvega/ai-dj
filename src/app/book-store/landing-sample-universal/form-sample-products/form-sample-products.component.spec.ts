import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSampleProductsComponent } from './form-sample-products.component';

describe('FormSampleProductsComponent', () => {
  let component: FormSampleProductsComponent;
  let fixture: ComponentFixture<FormSampleProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSampleProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormSampleProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
