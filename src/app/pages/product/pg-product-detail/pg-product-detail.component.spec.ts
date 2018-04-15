import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgProductDetailComponent } from './pg-product-detail.component';

describe('PgProductDetailComponent', () => {
  let component: PgProductDetailComponent;
  let fixture: ComponentFixture<PgProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
