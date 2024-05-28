import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorGrid2Component } from './instructor-grid2.component';

describe('InstructorGrid2Component', () => {
  let component: InstructorGrid2Component;
  let fixture: ComponentFixture<InstructorGrid2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorGrid2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorGrid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
