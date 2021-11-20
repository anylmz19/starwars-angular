import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filims3Component } from './filims3.component';

describe('Filims3Component', () => {
  let component: Filims3Component;
  let fixture: ComponentFixture<Filims3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Filims3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Filims3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
