import { ComponentFixture, TestBed } from '@angular/core/testing';

import { World9Component } from './world9.component';

describe('World9Component', () => {
  let component: World9Component;
  let fixture: ComponentFixture<World9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ World9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(World9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
