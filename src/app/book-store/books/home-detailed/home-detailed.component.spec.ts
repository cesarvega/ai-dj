import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDetailedComponent } from './home-detailed.component';

describe('HomeComponent', () => {
  let component: HomeDetailedComponent;
  let fixture: ComponentFixture<HomeDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDetailedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
