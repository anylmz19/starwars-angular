import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filims6Component } from './filims6.component';

describe('Filims6Component', () => {
  let component: Filims6Component;
  let fixture: ComponentFixture<Filims6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Filims6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Filims6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
