import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RealestatesPage } from './realestates.page';

describe('RealestatesPage', () => {
  let component: RealestatesPage;
  let fixture: ComponentFixture<RealestatesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RealestatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
