import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatefulPageComponent } from './stateful-page.component';

describe('StatefulPageComponent', () => {
  let component: StatefulPageComponent;
  let fixture: ComponentFixture<StatefulPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatefulPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatefulPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
