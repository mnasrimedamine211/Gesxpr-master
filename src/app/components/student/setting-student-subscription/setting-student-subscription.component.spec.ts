import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingStudentSubscriptionComponent } from './setting-student-subscription.component';

describe('SettingStudentSubscriptionComponent', () => {
  let component: SettingStudentSubscriptionComponent;
  let fixture: ComponentFixture<SettingStudentSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingStudentSubscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingStudentSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
