import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalInstructorComponent } from './withdrawal-instructor.component';

describe('WithdrawalInstructorComponent', () => {
  let component: WithdrawalInstructorComponent;
  let fixture: ComponentFixture<WithdrawalInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawalInstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrawalInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
