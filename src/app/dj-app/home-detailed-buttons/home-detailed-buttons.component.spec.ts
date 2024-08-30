import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDetailedButtonsComponent } from './home-detailed-buttons.component';

describe('HomeComponent', () => {
  let component: HomeDetailedButtonsComponent;
  let fixture: ComponentFixture<HomeDetailedButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDetailedButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDetailedButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
