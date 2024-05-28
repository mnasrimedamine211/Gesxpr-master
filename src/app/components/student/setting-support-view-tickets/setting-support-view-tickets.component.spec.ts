import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingSupportViewTicketsComponent } from './setting-support-view-tickets.component';

describe('SettingSupportViewTicketsComponent', () => {
  let component: SettingSupportViewTicketsComponent;
  let fixture: ComponentFixture<SettingSupportViewTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingSupportViewTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingSupportViewTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
