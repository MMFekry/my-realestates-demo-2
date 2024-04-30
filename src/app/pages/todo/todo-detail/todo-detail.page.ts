import { Component, OnDestroy, OnInit } from '@angular/core';
import { RealestateService } from 'src/app/service/realestate-service';
import { Todo } from 'src/app/pages/todo/models/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.page.html',
  styleUrls: ['./todo-detail.page.scss'],
})
export class TodoDetailPage implements OnInit, OnDestroy{
  todo!: Todo;
  constructor(private service: RealestateService) { }

  ngOnInit() {
    this.todo = this.service.getParams().todo;
  }
 ngOnDestroy(): void {
   this.service.setParams({});
 }
}
