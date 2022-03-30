import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shardUi/navbar/navbar.component';
import { NotFoundComponent } from './shardUi/not-found/not-found.component';
import { CreateUserComponent } from './Users/create-user/create-user.component';
import { ListUserComponent } from './Users/list-user/list-user.component';
import { HomeComponent } from './shardUi/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateUserComponent } from './Users/update-user/update-user.component';
import { ViewDataComponent } from './Users/view-data/view-data.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { EmployeeComponent } from './employee/employee.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    CreateUserComponent,
    ListUserComponent,
    HomeComponent,
    UpdateUserComponent,
    ViewDataComponent,
    RecipeItemComponent,
    EmployeeComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
