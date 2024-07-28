import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreAppComponent } from './score-app.component';

describe('ScoreAppComponent', () => {
  let component: ScoreAppComponent;
  let fixture: ComponentFixture<ScoreAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScoreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
