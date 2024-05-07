import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondServcesPage } from './second-servces.page';

describe('SecondServcesPage', () => {
  let component: SecondServcesPage;
  let fixture: ComponentFixture<SecondServcesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondServcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
