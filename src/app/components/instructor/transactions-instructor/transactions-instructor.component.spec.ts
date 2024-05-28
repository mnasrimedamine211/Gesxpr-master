import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsInstructorComponent } from './transactions-instructor.component';

describe('TransactionsInstructorComponent', () => {
  let component: TransactionsInstructorComponent;
  let fixture: ComponentFixture<TransactionsInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsInstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
