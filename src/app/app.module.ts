import { NgModule, isDevMode } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UpdateUserComponent } from './components/update-user.component';
import { PostListComponent } from './components/post-list.component';
import { PostCardComponent } from './components/post-card.component';


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
    LoginComponent,UpdateUserComponent,
    PostListComponent,PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, ReactiveFormsModule,
    MaterialModule,FormsModule,HttpClientModule, StoreModule.forRoot(rootReducer), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
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
