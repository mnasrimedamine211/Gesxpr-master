import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingStudentDeleteProfileComponent } from './setting-student-delete-profile.component';

describe('SettingStudentDeleteProfileComponent', () => {
  let component: SettingStudentDeleteProfileComponent;
  let fixture: ComponentFixture<SettingStudentDeleteProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingStudentDeleteProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingStudentDeleteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
