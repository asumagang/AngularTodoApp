import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    UsersModule,
    TodosModule,
  ],
  providers: [],
  bootstrap: [AppComponent,TodosComponent,UsersComponent]
})
export class AppModule { }
