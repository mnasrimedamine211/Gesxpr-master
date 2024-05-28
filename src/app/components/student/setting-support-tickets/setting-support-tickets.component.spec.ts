import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingSupportTicketsComponent } from './setting-support-tickets.component';

describe('SettingSupportTicketsComponent', () => {
  let component: SettingSupportTicketsComponent;
  let fixture: ComponentFixture<SettingSupportTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingSupportTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingSupportTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
