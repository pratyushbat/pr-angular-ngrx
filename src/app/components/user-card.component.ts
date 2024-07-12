import {Component, Input} from '@angular/core';
import {User} from '../models/user';
import {YoutubeRepository} from '../services/youtube-repository';
import {MatDialog} from '@angular/material/dialog';
// import {UpdateUserComponent} from './update-user.component';
import {ActivatedRoute, Router} from '@angular/router';
import { UpdateUserComponent } from './update-user.component';

@Component({
  selector: 'youtube-user-card',
  template: `
    <mat-card (click)="open()" style="margin-bottom: 30px;" fxLayout="column" fxLayoutGap="30px" fxLayoutAlign="start center">
      <mat-card-title>{{this.user.username}}</mat-card-title>
      <mat-card-content>{{this.user.email}}</mat-card-content>
      <button style="max-width: 20px; " (click)="delete()" mat-raised-button color="warn">Delete</button>
      <button style="max-width: 20px; " (click)="update()" mat-raised-button color="primary">Update</button>
    </mat-card>
  
  `,
  styles: [`.mat-mdc-card{
  background-color: #e5c3c3cc; ;
}  .mat-mdc-raised-button:not(:disabled) {
    background-color: #5a5c67;
} .mat-mdc-raised-button:not(:disabled) {
    color: #290905;
}`]
})

export class UserCardComponent {
  @Input() user!: User;

  constructor(private youtubeRepo: YoutubeRepository,
              private dialog: MatDialog, private router: Router,private actRoutes: ActivatedRoute) {
  }

  delete() {
     this.youtubeRepo.deleteUser(this.user.id);
  }

  update() {
    this.dialog.open(UpdateUserComponent, {
      width: '456px',height:'456px', data: this.user
    });
  }

  open() {
    this.router.navigate(['dashboard/user', this.user.id]);
  }
}
