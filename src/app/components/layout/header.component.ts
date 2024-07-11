import {Component} from '@angular/core';

@Component({
  selector: 'youtube-header',
  template: `
   <mat-toolbar color="primary" style="height: 85px; padding: 0 16px;">
      <div fxLayoutAlign="start left" fxFlex="100%" fxHide.xs>
        <button mat-button routerLink="/dashboard/users" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="selected">Users</button>
        <button mat-button routerLink="/dashboard/posts" routerLinkActive="selected">Posts</button>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .selected {
      background: #3c763d;
    }
  `]
})

export class HeaderComponent {

  constructor() {
  }
}
