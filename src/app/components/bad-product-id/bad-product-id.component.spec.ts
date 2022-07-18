import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadProductIdComponent } from './bad-product-id.component';

describe('BadProductIdComponent', () => {
  let component: BadProductIdComponent;
  let fixture: ComponentFixture<BadProductIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadProductIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadProductIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
