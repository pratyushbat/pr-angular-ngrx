import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/layout/dashboard.component';
import { UsersComponent } from './container/users.component';
import { ViewUserComponent } from './container/view-user.component';

const routes: Routes = [{
  path: '', component: DashboardComponent,
  children: [
    {path: '', component: UsersComponent},
    {path: 'user/:id', component: ViewUserComponent},
    // {path: 'post', component: PostComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
