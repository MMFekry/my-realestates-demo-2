import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eservicelv1Page } from './eservicelv1.page';

describe('Eservicelv1Page', () => {
  let component: Eservicelv1Page;
  let fixture: ComponentFixture<Eservicelv1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Eservicelv1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
