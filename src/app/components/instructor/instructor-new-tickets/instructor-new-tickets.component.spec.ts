import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorNewTicketsComponent } from './instructor-new-tickets.component';

describe('InstructorNewTicketsComponent', () => {
  let component: InstructorNewTicketsComponent;
  let fixture: ComponentFixture<InstructorNewTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorNewTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorNewTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
