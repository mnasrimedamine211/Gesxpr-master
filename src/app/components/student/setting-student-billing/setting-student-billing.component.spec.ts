import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingStudentBillingComponent } from './setting-student-billing.component';

describe('SettingStudentBillingComponent', () => {
  let component: SettingStudentBillingComponent;
  let fixture: ComponentFixture<SettingStudentBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingStudentBillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingStudentBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
