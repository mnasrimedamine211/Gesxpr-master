import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositInstructorDashboardComponent } from './deposit-instructor-dashboard.component';

describe('DepositInstructorDashboardComponent', () => {
  let component: DepositInstructorDashboardComponent;
  let fixture: ComponentFixture<DepositInstructorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositInstructorDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositInstructorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
