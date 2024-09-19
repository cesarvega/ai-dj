import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsSalesComponent } from './buttons-sales.component';

describe('ButtonsSalesComponent', () => {
  let component: ButtonsSalesComponent;
  let fixture: ComponentFixture<ButtonsSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsSalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
