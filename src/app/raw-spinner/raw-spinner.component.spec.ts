import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawSpinnerComponent } from './raw-spinner.component';

describe('RawSpinnerComponent', () => {
  let component: RawSpinnerComponent;
  let fixture: ComponentFixture<RawSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RawSpinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RawSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
