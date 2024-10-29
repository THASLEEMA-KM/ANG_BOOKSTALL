import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { HomeComponent } from './home/home.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ViewComponent } from './view/view.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // localhost:4200
  {path:'',component:DashboardComponent},
   //localhost:4200/home
   {path:'home' , component:HomeComponent},
  // localost:4200/books
  {path:'books', component:AddBookComponent},
  // localhost:4200/id/edit-book
  {path:':id/edit-book' , component:EditBookComponent},
  // localhost:4200/id/viewbook
  {path:':id/view' , component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
