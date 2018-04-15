import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgProductListComponent } from './pg-product-list.component';

describe('PgProductListComponent', () => {
  let component: PgProductListComponent;
  let fixture: ComponentFixture<PgProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
