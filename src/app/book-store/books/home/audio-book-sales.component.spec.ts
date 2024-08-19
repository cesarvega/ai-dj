import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioBookSalesComponent } from './audio-book-sales.component';

describe('AudioBookSalesComponent', () => {
  let component: AudioBookSalesComponent;
  let fixture: ComponentFixture<AudioBookSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioBookSalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudioBookSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
