import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { CreateComponent } from './components/create/create.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'users', component: UsersComponent},
  {path: 'create', component: CreateComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
