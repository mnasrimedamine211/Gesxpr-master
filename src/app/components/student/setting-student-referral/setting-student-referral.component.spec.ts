import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingStudentReferralComponent } from './setting-student-referral.component';

describe('SettingStudentReferralComponent', () => {
  let component: SettingStudentReferralComponent;
  let fixture: ComponentFixture<SettingStudentReferralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingStudentReferralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingStudentReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
