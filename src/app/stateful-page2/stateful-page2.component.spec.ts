import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatefulPage2Component } from './stateful-page2.component';

describe('StatefulPage2Component', () => {
  let component: StatefulPage2Component;
  let fixture: ComponentFixture<StatefulPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatefulPage2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatefulPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
