import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Character4Component } from './character4.component';

describe('Character4Component', () => {
  let component: Character4Component;
  let fixture: ComponentFixture<Character4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Character4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Character4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
