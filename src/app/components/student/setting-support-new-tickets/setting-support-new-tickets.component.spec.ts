import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingSupportNewTicketsComponent } from './setting-support-new-tickets.component';

describe('SettingSupportNewTicketsComponent', () => {
  let component: SettingSupportNewTicketsComponent;
  let fixture: ComponentFixture<SettingSupportNewTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingSupportNewTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingSupportNewTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
