import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vehicles13Component } from './vehicles13.component';

describe('Vehicles13Component', () => {
  let component: Vehicles13Component;
  let fixture: ComponentFixture<Vehicles13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vehicles13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vehicles13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
