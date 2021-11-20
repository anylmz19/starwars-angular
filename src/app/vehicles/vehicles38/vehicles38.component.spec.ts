import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vehicles38Component } from './vehicles38.component';

describe('Vehicles38Component', () => {
  let component: Vehicles38Component;
  let fixture: ComponentFixture<Vehicles38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vehicles38Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vehicles38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
