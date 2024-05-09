import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, InfiniteScrollCustomEvent, RefresherEventDetail} from '@ionic/angular';
import { RealestateService } from 'src/app/service/realestate-service';
import { Todo } from 'src/app/pages/todo/models/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {
 alert : AlertController = new AlertController();
 todos!: Todo[];
 loading: boolean=true;
 err!: string;
 page: number=1;
  constructor(private router: Router, private service: RealestateService,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    
    this.getData();
    
  }

  CreateTodo(){
    this.router.navigate(['/todo-add'])

  }

  getData(event?: any){
    if(!event) this.loading = true;
    this.service.getData('todos').subscribe((res : any) => {
      event? event.target.complete() : this.loading = false;
      this.todos = res;
    }, e => {
      event? event.target.complete() : this.loading = false;
      this.err = e;
    });
  }
  getTodoJson(){
    this.todos = this.todoService.getJSon();
  }
  detail(todo: Todo){
    this.service.setParams({todo});

    this.router.navigate(['/todo-detail'])

  }

  async delete(i : number){
    let al = this.alert.create({
      header: "confirm delete",
      message: "are you sure todo delete?",
      mode:"ios",
      buttons: [{
        text:"No",
        role:"cancel"
      },
      {
        text:"Yes",
        handler:() => {
          console.log("todo delete");
          this.todos.splice(i, 1);
        }
      }]
    });
    
    (await al).present();
  }

  edit(todo: Todo){
    this.service.setParams({todo});

    this.router.navigate(['/todo-add'])

  }

  doRefresh(event: any){
      this.getData(event);
  }

  
loadMore(event: any) {
  this.page+=1;
  this.getData(event);
}

}
