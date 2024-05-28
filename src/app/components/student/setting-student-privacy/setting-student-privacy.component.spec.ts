import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingStudentPrivacyComponent } from './setting-student-privacy.component';

describe('SettingStudentPrivacyComponent', () => {
  let component: SettingStudentPrivacyComponent;
  let fixture: ComponentFixture<SettingStudentPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingStudentPrivacyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingStudentPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
