import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoAddPage } from './todo-add.page';

describe('TodoAddPage', () => {
  let component: TodoAddPage;
  let fixture: ComponentFixture<TodoAddPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
