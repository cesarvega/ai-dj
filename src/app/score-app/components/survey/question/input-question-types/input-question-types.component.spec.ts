import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputQuestionTypesComponent } from './input-question-types.component';

describe('InputQuestionTypesComponent', () => {
  let component: InputQuestionTypesComponent;
  let fixture: ComponentFixture<InputQuestionTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputQuestionTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputQuestionTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
