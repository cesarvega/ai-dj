import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioBookDetailComponent } from './audio-book-detail.component';

describe('AudioBookDetailComponent', () => {
  let component: AudioBookDetailComponent;
  let fixture: ComponentFixture<AudioBookDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioBookDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudioBookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
