import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingStudentSecurityComponent } from './setting-student-security.component';

describe('SettingStudentSecurityComponent', () => {
  let component: SettingStudentSecurityComponent;
  let fixture: ComponentFixture<SettingStudentSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingStudentSecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingStudentSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
