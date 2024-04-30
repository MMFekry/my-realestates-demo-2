import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoAddPageRoutingModule } from './todo-add-routing.module';

import { TodoAddPage } from './todo-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TodoAddPage]
})
export class TodoAddPageModule {}
