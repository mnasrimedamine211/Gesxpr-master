import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingStudentPaymentComponent } from './setting-student-payment.component';

describe('SettingStudentPaymentComponent', () => {
  let component: SettingStudentPaymentComponent;
  let fixture: ComponentFixture<SettingStudentPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingStudentPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingStudentPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
