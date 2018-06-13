import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsUploadComponent } from './products-upload.component';

describe('ProductsUploadComponent', () => {
  let component: ProductsUploadComponent;
  let fixture: ComponentFixture<ProductsUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
