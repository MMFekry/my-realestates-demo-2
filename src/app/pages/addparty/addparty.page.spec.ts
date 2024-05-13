import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddpartyPage } from './addparty.page';

describe('AddpartyPage', () => {
  let component: AddpartyPage;
  let fixture: ComponentFixture<AddpartyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpartyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
