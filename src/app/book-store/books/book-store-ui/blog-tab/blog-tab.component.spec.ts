import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTabComponent } from './blog-tab.component';

describe('BlogTabComponent', () => {
  let component: BlogTabComponent;
  let fixture: ComponentFixture<BlogTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
