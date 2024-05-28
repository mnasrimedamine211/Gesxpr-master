import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositStudentDashboardComponent } from './deposit-student-dashboard.component';

describe('DepositStudentDashboardComponent', () => {
  let component: DepositStudentDashboardComponent;
  let fixture: ComponentFixture<DepositStudentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositStudentDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositStudentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
