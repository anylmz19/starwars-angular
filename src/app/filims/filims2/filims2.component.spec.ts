import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filims2Component } from './filims2.component';

describe('Filims2Component', () => {
  let component: Filims2Component;
  let fixture: ComponentFixture<Filims2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Filims2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Filims2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
