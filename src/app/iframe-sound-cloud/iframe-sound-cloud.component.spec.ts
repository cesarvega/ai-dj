import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeSoundCloudComponent } from './iframe-sound-cloud.component';

describe('IframeSoundCloudComponent', () => {
  let component: IframeSoundCloudComponent;
  let fixture: ComponentFixture<IframeSoundCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IframeSoundCloudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IframeSoundCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
