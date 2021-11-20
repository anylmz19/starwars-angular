import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Character6Component } from './character6.component';

describe('Character6Component', () => {
  let component: Character6Component;
  let fixture: ComponentFixture<Character6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Character6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Character6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
