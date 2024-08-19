import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioBookPlayerComponent } from './audio-book-player.component';

describe('AudioBookSalesComponent', () => {
  let component: AudioBookPlayerComponent;
  let fixture: ComponentFixture<AudioBookPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioBookPlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudioBookPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
