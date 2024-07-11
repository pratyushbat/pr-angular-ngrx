import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../models/user';
import { YoutubeRepository } from '../services/youtube-repository';
import { Observable, takeWhile } from 'rxjs';

@Component({
  selector: 'youtube-users',
  template: `
    <div fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="30px">
      <youtube-user-list *ngIf="!this.loading && !this.error" [users]="this.users"></youtube-user-list>
      <mat-spinner *ngIf="this.loading"></mat-spinner>
      <youtube-error (reload)="this.tryAgain()" *ngIf="this.error && !loading"></youtube-error>
      <button *ngIf="!this.loading && !this.error" (click)="addUser()" mat-raised-button color="primary">Add User</button>
    </div>
  `,
  styles: [`.mt-2{ margin-top:10px;margin-bottom:10px}`]
})

export class UsersComponent implements OnDestroy {
  users: User[] = [];
  loading = false;
  error = false;
  isAlive = true;

  //compoennet-> repository service ->apiservice->httpService-> httpclient
  constructor(private youtubeRepository: YoutubeRepository) {
  }

  ngOnInit() {
    this.getInitUsers();
  }


  ngOnDestroy() {
    this.isAlive = false;
  }

  getInitUsers() {
    const observer$: [Observable<boolean>, Observable<User[]>, Observable<boolean>] = this.youtubeRepository.getUserList();
    const userData$: Observable<User[]> = observer$[1];
    const loading$: Observable<boolean> = observer$[0];
    const userError$: Observable<boolean> = observer$[2];
    userData$.pipe(takeWhile(()=>this.isAlive)).subscribe(((data: any) => { this.users = data }));

    loading$.pipe(takeWhile(()=>this.isAlive)).subscribe(data => this.loading = data);
    userError$.pipe(takeWhile(()=>this.isAlive)).subscribe(data => {  this.error = data; });
  }

  tryAgain() {
    this.youtubeRepository.getUserList(true);
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
