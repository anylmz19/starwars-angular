import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Character9Component } from './character9.component';

describe('Character9Component', () => {
  let component: Character9Component;
  let fixture: ComponentFixture<Character9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Character9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Character9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
