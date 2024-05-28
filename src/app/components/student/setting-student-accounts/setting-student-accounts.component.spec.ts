import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingStudentAccountsComponent } from './setting-student-accounts.component';

describe('SettingStudentAccountsComponent', () => {
  let component: SettingStudentAccountsComponent;
  let fixture: ComponentFixture<SettingStudentAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingStudentAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingStudentAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
