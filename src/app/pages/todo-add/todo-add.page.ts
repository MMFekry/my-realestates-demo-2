import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RealestateService } from 'src/app/service/realestate-service';
import { Todo } from 'src/app/shared/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.page.html',
  styleUrls: ['./todo-add.page.scss'],
})
export class TodoAddPage implements OnInit, OnDestroy {
  form: FormGroup= new FormGroup({});
  todo! : Todo;

  constructor(private fb: FormBuilder, private service: RealestateService, private router: Router) { 
    this.CreateForm();

  }

  ngOnInit() {
    this.todo = this.service.getParams().todo;
    this.patchForm();
  }
  CreateForm(){
    this.form = this.fb.group({
      title: ['', Validators.required],
      desc: ['', Validators.required],
    });
  }

  patchForm(){
    if(this.todo){
      this.form.patchValue({
      title: this.todo.title,
      desc: this.todo.desc
      });
    }
  }
  OnSubmit(){
    console.log(this.form.value);
    let form = this.form.value;
    if(this.todo){
      this.todo.title = form.title;
      this.todo.desc = form.desc;
      this.todo.date = new Date();
    }
    this.router.navigate(['/todo-list'])

  }

  ngOnDestroy(): void {
    this.service.setParams({});
  }
}
