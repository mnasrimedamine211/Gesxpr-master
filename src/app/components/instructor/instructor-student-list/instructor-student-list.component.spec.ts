import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorStudentListComponent } from './instructor-student-list.component';

describe('InstructorStudentListComponent', () => {
  let component: InstructorStudentListComponent;
  let fixture: ComponentFixture<InstructorStudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorStudentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
