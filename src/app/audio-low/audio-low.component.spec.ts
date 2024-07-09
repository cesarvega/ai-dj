import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioLowComponent } from './audio-low.component';

describe('AudioLowComponent', () => {
  let component: AudioLowComponent;
  let fixture: ComponentFixture<AudioLowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioLowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudioLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
