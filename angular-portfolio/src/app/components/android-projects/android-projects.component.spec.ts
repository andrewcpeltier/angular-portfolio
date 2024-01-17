import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidProjectsComponent } from './android-projects.component';

describe('AndroidProjectsComponent', () => {
  let component: AndroidProjectsComponent;
  let fixture: ComponentFixture<AndroidProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndroidProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AndroidProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
