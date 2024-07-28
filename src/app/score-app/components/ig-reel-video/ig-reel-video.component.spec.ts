import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgReelVideoComponent } from './ig-reel-video.component';

describe('IgReelVideoComponent', () => {
  let component: IgReelVideoComponent;
  let fixture: ComponentFixture<IgReelVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IgReelVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IgReelVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
