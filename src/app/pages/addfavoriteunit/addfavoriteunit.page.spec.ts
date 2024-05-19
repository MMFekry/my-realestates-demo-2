import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddfavoriteunitPage } from './addfavoriteunit.page';

describe('AddfavoriteunitPage', () => {
  let component: AddfavoriteunitPage;
  let fixture: ComponentFixture<AddfavoriteunitPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfavoriteunitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
