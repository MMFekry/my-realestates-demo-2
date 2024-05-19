import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalevaluePage } from './salevalue.page';

describe('SalevaluePage', () => {
  let component: SalevaluePage;
  let fixture: ComponentFixture<SalevaluePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SalevaluePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
