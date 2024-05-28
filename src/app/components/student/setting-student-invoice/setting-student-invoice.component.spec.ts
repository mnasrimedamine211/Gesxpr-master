import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingStudentInvoiceComponent } from './setting-student-invoice.component';

describe('SettingStudentInvoiceComponent', () => {
  let component: SettingStudentInvoiceComponent;
  let fixture: ComponentFixture<SettingStudentInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingStudentInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingStudentInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
