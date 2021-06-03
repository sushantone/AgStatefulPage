import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatelessPageComponent } from './stateless-page.component';

describe('StatelessPageComponent', () => {
  let component: StatelessPageComponent;
  let fixture: ComponentFixture<StatelessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatelessPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatelessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
