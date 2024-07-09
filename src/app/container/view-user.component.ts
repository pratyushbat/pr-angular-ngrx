import { Component, OnDestroy } from "@angular/core";
import { User } from "../models/user";
import { ActivatedRoute } from "@angular/router";
import { YoutubeRepository } from "../services/youtube-repository";
import { filter, switchMap, takeWhile } from "rxjs";


@Component({
  selector: 'youtube-view-user',
  template: `
    <h1>{{this.user ? this.user.email : ''}}</h1>
    <h1>{{this.user ? this.user.name : ''}}</h1>
  `,
  styles: [``]
})

export class ViewUserComponent implements OnDestroy {
  isAlive = true;
  user: User|any;

  constructor(private route: ActivatedRoute, private youtubeRepo: YoutubeRepository) {
    // this.route.params.subscribe(data => {
    //   this.youtubeRepo.getUserById(data.id).subscribe(user => {
    //     console.log(user);
    //   });
    // });
    this.fetchData();
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  fetchData() {
    // const user$ = this.route.params.pipe(map(data => data.id),
    //   takeWhile(() => this.isAlive),
    //   switchMap((id) => {
    //     return this.youtubeRepo.getUserById(id);
    //   }), filter(res => !!res));
    // user$.subscribe(data => {
    //   this.user = data;
    // });
  }

}
