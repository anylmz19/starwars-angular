import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Character5Component } from './character5.component';

describe('Character5Component', () => {
  let component: Character5Component;
  let fixture: ComponentFixture<Character5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Character5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Character5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
