import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Character8Component } from './character8.component';

describe('Character8Component', () => {
  let component: Character8Component;
  let fixture: ComponentFixture<Character8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Character8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Character8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
