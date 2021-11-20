import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Character7Component } from './character7.component';

describe('Character7Component', () => {
  let component: Character7Component;
  let fixture: ComponentFixture<Character7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Character7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Character7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
