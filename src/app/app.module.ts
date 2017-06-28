import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {TodosComponent} from "./2-todos/todos.component";
import {UserDetailsComponent} from "./3-user-details/user-details.component";
import {VoterComponent} from "./1-voter/voter.component";
import {UsersComponent} from "./users/users.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    UserDetailsComponent,
    VoterComponent,
    UsersComponent,
    NavComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
