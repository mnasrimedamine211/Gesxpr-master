import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositStudentComponent } from './deposit-student.component';

describe('DepositStudentComponent', () => {
  let component: DepositStudentComponent;
  let fixture: ComponentFixture<DepositStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
