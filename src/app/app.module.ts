import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { TodoReducer } from './state/todos/todo.reducer';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TodoPageComponent } from './pages/todopage/todopage.component';
import { TodoCreateFormComponent } from './components/todo-create-form/todo-create-form.component';
import { TodoUpdateFormComponent } from './components/todo-update-form/todo-update-form.component';

@NgModule({
  declarations: [AppComponent, TodolistComponent, TodoPageComponent, TodoCreateFormComponent, TodoUpdateFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ todoReducer: TodoReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
