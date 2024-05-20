import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeessalePage } from './feessale.page';

describe('FeessalePage', () => {
  let component: FeessalePage;
  let fixture: ComponentFixture<FeessalePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FeessalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
