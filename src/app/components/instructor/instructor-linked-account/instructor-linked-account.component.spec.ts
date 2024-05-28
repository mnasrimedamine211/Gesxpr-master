import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorLinkedAccountComponent } from './instructor-linked-account.component';

describe('InstructorLinkedAccountComponent', () => {
  let component: InstructorLinkedAccountComponent;
  let fixture: ComponentFixture<InstructorLinkedAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorLinkedAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorLinkedAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
