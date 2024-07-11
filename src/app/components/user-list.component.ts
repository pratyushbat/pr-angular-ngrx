import {Component, Input} from '@angular/core';
import {User} from '../models/user';

@Component({
  selector: 'youtube-user-list',
  template: `
    <div fxLayout="column wrap" style="max-width: 500px; " fxLayoutAlign="  center start" fxLayoutGap="20px">
      <youtube-user-card [user]="user"
                         *ngFor="let user of users"></youtube-user-card>
    </div>
  `,
  styles: [``]
})

export class UserListComponent {
  @Input() users: User[]=[];

  constructor() {
  }
}
