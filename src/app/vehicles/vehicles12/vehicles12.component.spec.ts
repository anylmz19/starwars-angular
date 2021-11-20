import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vehicles12Component } from './vehicles12.component';

describe('Vehicles12Component', () => {
  let component: Vehicles12Component;
  let fixture: ComponentFixture<Vehicles12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vehicles12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vehicles12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
