import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, InfiniteScrollCustomEvent, RefresherEventDetail} from '@ionic/angular';
import { RealestateService } from 'src/app/service/realestate-service';
import { Todo } from 'src/app/shared/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {
 alert : AlertController = new AlertController();
 todos!: Todo[];
 loading: boolean=true;
  constructor(private router: Router, private service: RealestateService) { }

  ngOnInit() {
    this.getData();
  }

  CreateTodo(){
    this.router.navigate(['/todo-add'])

  }

  getData(){
    setTimeout(() => {
      this.loading = false;
      this.todos = this.service.getData();
    }, 3000);
  
    this.todos =  this.service.getData();
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

  doRefresh(event: InfiniteScrollCustomEvent){
    setTimeout(() => {
      this.service.getData();
      event.target.complete();
    }, 3000);


  }

  
loadMore(event: InfiniteScrollCustomEvent) {
  setTimeout(() => {
    this.todos = this.todos.concat(...this.service.getData());
    event.target.complete();
  }, 3000);
}

}
