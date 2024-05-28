import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsStudentComponent } from './transactions-student.component';

describe('TransactionsStudentComponent', () => {
  let component: TransactionsStudentComponent;
  let fixture: ComponentFixture<TransactionsStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
