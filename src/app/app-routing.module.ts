import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/layout/dashboard.component';
import { UsersComponent } from './container/users.component';
import { ViewUserComponent } from './container/view-user.component';
import { PostComponent } from './container/post.component';
import { LoginComponent } from './components/login.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,},
  { path: 'dashboard', component: DashboardComponent,
  children: [
    {path: '', redirectTo:'users', pathMatch:"full" },
    {path: 'users', component: UsersComponent},
    {path: 'posts', component: PostComponent},
    {path: 'user/:id', component: ViewUserComponent},
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
