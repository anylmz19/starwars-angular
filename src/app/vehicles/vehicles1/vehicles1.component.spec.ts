import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vehicles1Component } from './vehicles1.component';

describe('Vehicles1Component', () => {
  let component: Vehicles1Component;
  let fixture: ComponentFixture<Vehicles1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vehicles1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vehicles1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
