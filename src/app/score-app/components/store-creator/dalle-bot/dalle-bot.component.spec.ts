import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalleBotComponent } from './dalle-bot.component';

describe('DalleBotComponent', () => {
  let component: DalleBotComponent;
  let fixture: ComponentFixture<DalleBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DalleBotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DalleBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
