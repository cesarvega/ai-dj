import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSessionFormComponent } from './customer-session-form.component';

describe('CustomerSessionFormComponent', () => {
  let component: CustomerSessionFormComponent;
  let fixture: ComponentFixture<CustomerSessionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerSessionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerSessionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
