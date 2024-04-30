import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RealestateService } from 'src/app/service/realestate-service';
import { Todo } from 'src/app/shared/todo';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.page.html',
  styleUrls: ['./todo-add.page.scss'],
})
export class TodoAddPage implements OnInit, OnDestroy {
  form: FormGroup= new FormGroup({});
  todo! : Todo;

  constructor(private fb: FormBuilder, private service: RealestateService, private router: Router,
    private loadingCtrl: LoadingController, private tosterCtrl : ToastController
  ) { 
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
  async OnSubmit(){
     let form = this.form.value;
    // if(this.todo){
    //   this.todo.title = form.title;
    //   this.todo.desc = form.desc;
    //   this.todo.date = new Date();
    // }
    // this.router.navigate(['/todo-list'])
    let loading = await this.loadingCtrl.create({});
    await loading.present();

    if(this.todo){
      let todo: Todo = {
        ...form,
        date:new Date()
      }
      this.service.updateData('todos/'+ this.todo.id, todo).subscribe(async res => 
      {
        await loading.dismiss();
        let toast = await this.tosterCtrl.create({
          message:'todo updated!'
        });
        await toast.present();
        this.router.navigate(['/todo-list'])
        await toast.dismiss();

      }, async e => {
        await loading.dismiss();
        let toast = await this.tosterCtrl.create({
          message: e.message
        });
        await toast.present();
      });    
    }
    else{
      let todo: Todo = {
        ...form,
        date:new Date()
      }
      this.service.postData('todos', todo).subscribe(async res => 
      {
        await loading.dismiss();
        let toast = await this.tosterCtrl.create({
          message:'todo saved'
        });
        await toast.present();
        this.router.navigate(['/todo-list'])
        await toast.dismiss();

      }, async e => {
        await loading.dismiss();
        let toast = await this.tosterCtrl.create({
          message: e.message
        });
        await toast.present();
      });
    }
  }

  ngOnDestroy(): void {
    this.service.setParams({});
  }
}
