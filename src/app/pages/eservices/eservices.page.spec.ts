import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EservicesPage } from './eservices.page';

describe('EservicesPage', () => {
  let component: EservicesPage;
  let fixture: ComponentFixture<EservicesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EservicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
