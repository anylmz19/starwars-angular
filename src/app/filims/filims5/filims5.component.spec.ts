import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filims5Component } from './filims5.component';

describe('Filims5Component', () => {
  let component: Filims5Component;
  let fixture: ComponentFixture<Filims5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Filims5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Filims5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
