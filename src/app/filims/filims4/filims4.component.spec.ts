import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filims4Component } from './filims4.component';

describe('Filims4Component', () => {
  let component: Filims4Component;
  let fixture: ComponentFixture<Filims4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Filims4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Filims4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
