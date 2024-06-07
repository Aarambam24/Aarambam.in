import { ComponentFixture, TestBed } from '@angular/core/testing';

import { product.component } from './product.component';

describe('product.component', () => {
  let component: product.component;
  let fixture: ComponentFixture<product.component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [product.component]
    });
    fixture = TestBed.createComponent(product.component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
