import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNotExistsComponent } from './product-not-exists.component';

describe('ProductNotExistsComponent', () => {
  let component: ProductNotExistsComponent;
  let fixture: ComponentFixture<ProductNotExistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductNotExistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNotExistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
