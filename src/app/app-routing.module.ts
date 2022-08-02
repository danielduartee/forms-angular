import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './pages/planos/data-binding.component';
import { HomeComponent } from './pages/home/home.component';
import { ToListComponent } from './pages/todo/to-list/to-list.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';

const routes: Routes = [
  { path:'', component: UsersListComponent},
  { path:'form', component: UserFormComponent},
  { path:'form/:id', component: UserFormComponent},
  { path: 'data-binding', component: DataBindingComponent},
  { path: 'todo', component: ToListComponent},
  { path: 'users', component: UsersListComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
