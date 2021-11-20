import { ComponentFixture, TestBed } from '@angular/core/testing';

import { World20Component } from './world20.component';

describe('World20Component', () => {
  let component: World20Component;
  let fixture: ComponentFixture<World20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ World20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(World20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
