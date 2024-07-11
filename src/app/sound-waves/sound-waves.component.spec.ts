import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundWavesComponent } from './sound-waves.component';

describe('SoundWavesComponent', () => {
  let component: SoundWavesComponent;
  let fixture: ComponentFixture<SoundWavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoundWavesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoundWavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
