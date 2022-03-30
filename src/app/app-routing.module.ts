import { EmployeeComponent } from './employee/employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDataComponent } from './Users/view-data/view-data.component';
import { NotFoundComponent } from './shardUi/not-found/not-found.component';
import { CreateUserComponent } from './Users/create-user/create-user.component';
import { ListUserComponent } from './Users/list-user/list-user.component';
import { HomeComponent } from './shardUi/home/home.component';
import { UpdateUserComponent } from './Users/update-user/update-user.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'lu',component:ListUserComponent},
  {path:'cu',component:CreateUserComponent},
  {path:'uu/:id',component:UpdateUserComponent},
  {path:'vu/:id',component:ViewDataComponent},
  {path:'em/:id',component:EmployeeComponent},
  {path:'em',component:EmployeeComponent},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
