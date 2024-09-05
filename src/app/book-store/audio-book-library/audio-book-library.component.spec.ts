import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioBookLibraryComponent } from './audio-book-library.component';

describe('AudioBookLibraryComponent', () => {
  let component: AudioBookLibraryComponent;
  let fixture: ComponentFixture<AudioBookLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioBookLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudioBookLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
