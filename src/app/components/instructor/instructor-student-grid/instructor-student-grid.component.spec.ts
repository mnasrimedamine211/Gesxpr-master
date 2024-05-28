import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorStudentGridComponent } from './instructor-student-grid.component';

describe('InstructorStudentGridComponent', () => {
  let component: InstructorStudentGridComponent;
  let fixture: ComponentFixture<InstructorStudentGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorStudentGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorStudentGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
