import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterexpertComponent } from './registerexpert.component';

describe('RegisterexpertComponent', () => {
  let component: RegisterexpertComponent;
  let fixture: ComponentFixture<RegisterexpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterexpertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
