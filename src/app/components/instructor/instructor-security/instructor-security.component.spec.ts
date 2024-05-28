import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorSecurityComponent } from './instructor-security.component';

describe('InstructorSecurityComponent', () => {
  let component: InstructorSecurityComponent;
  let fixture: ComponentFixture<InstructorSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorSecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
