import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewaddressPage } from './reviewaddress.page';

describe('ReviewaddressPage', () => {
  let component: ReviewaddressPage;
  let fixture: ComponentFixture<ReviewaddressPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewaddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
