import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeLocationComponent } from './qr-code-location.component';

describe('QrCodeLocationComponent', () => {
  let component: QrCodeLocationComponent;
  let fixture: ComponentFixture<QrCodeLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrCodeLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QrCodeLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
