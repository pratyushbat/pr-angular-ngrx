import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/layout/dashboard.component';
import { HeaderComponent } from './components/layout/header.component';
import { LayoutComponent } from './components/layout/youtube-layout.component';
import { ViewUserComponent } from './container/view-user.component';
import { UsersComponent } from './container/users.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { RouterModule } from '@angular/router';
import { MaterialModule } from './modules/material/material.module';
import { YoutubeRepository } from './services/youtube-repository';
import { ErrorComponent } from './components/error.component';
import { UserListComponent } from './components/user-list.component';
import { UserCardComponent } from './components/user-card.component';
import { PostComponent } from './container/post.component';
import { HttpService } from './services/http.service';
import { ApiService } from './services/api.service';
import { LoginComponent } from './components/login.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    LayoutComponent,
    ViewUserComponent,
    UsersComponent,
    ErrorComponent,
    UserListComponent,
    UserCardComponent,
    PostComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, 
    MaterialModule,FormsModule,HttpClientModule, StoreModule.forRoot({}, {})
  ],
  providers: [
    provideAnimationsAsync(),
    YoutubeRepository,
    HttpService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
