import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuijesuisComponent } from './quijesuis.component';

describe('QuijesuisComponent', () => {
  let component: QuijesuisComponent;
  let fixture: ComponentFixture<QuijesuisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuijesuisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuijesuisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
