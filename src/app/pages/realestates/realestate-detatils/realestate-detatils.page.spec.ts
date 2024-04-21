import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RealestateDetatilsPage } from './realestate-detatils.page';

describe('RealestateDetatilsPage', () => {
  let component: RealestateDetatilsPage;
  let fixture: ComponentFixture<RealestateDetatilsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RealestateDetatilsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
