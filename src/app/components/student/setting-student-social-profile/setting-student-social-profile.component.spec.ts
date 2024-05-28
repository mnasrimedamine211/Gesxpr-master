import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingStudentSocialProfileComponent } from './setting-student-social-profile.component';

describe('SettingStudentSocialProfileComponent', () => {
  let component: SettingStudentSocialProfileComponent;
  let fixture: ComponentFixture<SettingStudentSocialProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingStudentSocialProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingStudentSocialProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
