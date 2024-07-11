import {Component, OnInit} from '@angular/core';
import {User} from '../models/user';
import {YoutubeRepository} from '../services/youtube-repository';
import {Post} from '../models/post';
import {takeWhile} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'youtube-post',
  template: `
   post componennty
    <youtube-user-list  [users]="this.users"></youtube-user-list>
  `,
  styles: [``]
})

export class PostComponent implements OnInit {
  postList: Post[]=[];
  isAlive = true;
  loading = false;
  error = false;
  users: any[]=[];

  constructor(private youtubeRepository: YoutubeRepository) {
  }

  ngOnInit() {
    this.getInitUsers();
  }

  getInitUsers() {
    const observer$: [Observable<boolean>, Observable<User[]>, Observable<boolean>] = this.youtubeRepository.getUserList();
    const userData$: Observable<User[]> = observer$[1];
    userData$.subscribe(((data: any) => { this.users = data }));

  }

 
}
