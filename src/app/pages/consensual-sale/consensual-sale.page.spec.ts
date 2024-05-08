import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsensualSalePage } from './consensual-sale.page';

describe('ConsensualSalePage', () => {
  let component: ConsensualSalePage;
  let fixture: ComponentFixture<ConsensualSalePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsensualSalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
