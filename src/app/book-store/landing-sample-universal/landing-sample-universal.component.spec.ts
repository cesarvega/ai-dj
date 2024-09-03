import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSampleUniversalComponent } from './landing-sample-universal.component';

describe('LandingSampleUniversalComponent', () => {
  let component: LandingSampleUniversalComponent;
  let fixture: ComponentFixture<LandingSampleUniversalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingSampleUniversalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingSampleUniversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
