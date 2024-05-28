import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositInstructorComponent } from './deposit-instructor.component';

describe('DepositInstructorComponent', () => {
  let component: DepositInstructorComponent;
  let fixture: ComponentFixture<DepositInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositInstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
