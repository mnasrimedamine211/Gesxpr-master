import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsGrid2Component } from './students-grid2.component';

describe('StudentsGrid2Component', () => {
  let component: StudentsGrid2Component;
  let fixture: ComponentFixture<StudentsGrid2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsGrid2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsGrid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
