import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioBookCardComponent } from './audio-book-card.component';

describe('AudioBookCardComponent', () => {
  let component: AudioBookCardComponent;
  let fixture: ComponentFixture<AudioBookCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioBookCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudioBookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
