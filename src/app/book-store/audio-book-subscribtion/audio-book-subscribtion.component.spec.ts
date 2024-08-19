import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioBookSubscribtionComponent } from './audio-book-subscribtion.component';

describe('AudioBookSubscribtionComponent', () => {
  let component: AudioBookSubscribtionComponent;
  let fixture: ComponentFixture<AudioBookSubscribtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioBookSubscribtionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudioBookSubscribtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
