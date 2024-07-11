import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../models/user';
import { YoutubeRepository } from '../services/youtube-repository';
import { takeWhile } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
// import {UpdateUserComponent} from '../components/update-user.component';

@Component({
  selector: 'youtube-users',
  template: `
      <button class="mt-2" *ngIf="!this.loading && !this.error" (click)="addUser()" mat-raised-button color="primary">Add User</button>
      <div fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="10px">
      <youtube-user-list [users]="this.users"></youtube-user-list>
      <mat-spinner *ngIf="this.loading"></mat-spinner>
      <youtube-error (reload)="this.tryAgain()" *ngIf="this.error && !loading"></youtube-error>
      
    </div>
  `,
  styles: [`.mt-2{ margin-top:10px;margin-bottom:10px}`]
})

export class UsersComponent {
  users: User[] = [];
  loading = false;
  error = false;
  isAlive = true;

  constructor(private youtubeRepository: YoutubeRepository, private dialog: MatDialog,private apiService:ApiService) {
  }

  ngOnInit() {
 this.fetchData();
  }


  ngOnDestroy() {
    this.isAlive = false;
  }

  fetchData() {
  this.apiService.getAllUser().subscribe((data:any)=> {
  this.users=data.users;
  this.loading=false;
  });
  }

  tryAgain() {
    // this.youtubeRepository.getUserList(true);
  }

  addUser() {
    // this.dialog.open(UpdateUserComponent, {
    //   width: '256px'
    // });
  }
}


// reducer -> it contain a state (global state)
// it will take an action -> it will return a new state

// action -> it will contain a payload and a type

// Dependency Injection Principle
// you should not depend on something directly
// component -> youtube repo -> apiService -> http Service -> http client
