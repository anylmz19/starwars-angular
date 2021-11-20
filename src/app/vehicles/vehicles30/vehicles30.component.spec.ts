import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vehicles30Component } from './vehicles30.component';

describe('Vehicles30Component', () => {
  let component: Vehicles30Component;
  let fixture: ComponentFixture<Vehicles30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vehicles30Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vehicles30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
