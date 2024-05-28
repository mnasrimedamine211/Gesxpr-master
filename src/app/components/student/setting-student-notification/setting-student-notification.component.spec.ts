import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingStudentNotificationComponent } from './setting-student-notification.component';

describe('SettingStudentNotificationComponent', () => {
  let component: SettingStudentNotificationComponent;
  let fixture: ComponentFixture<SettingStudentNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingStudentNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingStudentNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
