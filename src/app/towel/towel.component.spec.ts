/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TowelComponent } from './towel.component';

describe('TowelComponent', () => {
  let component: TowelComponent;
  let fixture: ComponentFixture<TowelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TowelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TowelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
