import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioBookReviewsComponent } from './audio-book-reviews.component';

describe('AudioBookReviewsComponent', () => {
  let component: AudioBookReviewsComponent;
  let fixture: ComponentFixture<AudioBookReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioBookReviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudioBookReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
