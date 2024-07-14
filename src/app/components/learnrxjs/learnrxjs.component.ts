import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, debounceTime, distinctUntilChanged, filter, interval, map, Observable, of, switchMap, timer } from 'rxjs';


@Component({
  selector: 'app-learnrxjs',
  templateUrl: './learnrxjs.component.html',
  styleUrl: './learnrxjs.component.css'
})
export class LearnrxjsComponent implements OnInit {
  ngOnInit(): void {

    const timer1$=timer(1000,4000);
    
    const timer2$=timer(2000,4000);
    const timer3$=timer(3000,4000);
    combineLatest([timer1$,timer2$,timer3$]).subscribe(data=>{
      console.log(data)
    })

    var searchBar$ = of('a', 'an', 'an', 'ann', 5,'anny');
    searchBar$.pipe(distinctUntilChanged(),debounceTime(1000)).subscribe((data) => console.log(data))

    // this.fm.subscribe(data=>console.log(data));
    // this.changeSongs();
    // return last latest value thatts why initiial value is reequired
    // setTimeout(()=>this.fm.subscribe(data=>console.log(data)),4000)

    // this.listenRadio().subscribe((data:any)=>{
    //   console.log(data)
    // },(err:any)=>{console.log(err)})

    // this.listenRadio().subscribe((data:any)=>{
    //   console.log(data,'second')
    // },(err:any)=>{console.log(err)})

    // interval(1000)
    //   .pipe(map(data => data * 2))
    //   .pipe(filter(data => data % 2 == 0))
    //   .subscribe((data: any) => {
    //     console.log(data)
    //   }, (err: any) => { console.log(err) });

    // this.fetchUser()
    //   .pipe(map(data => data.data))
    //   .subscribe(
    //     data => console.log(data)
    //   );

    // this.getSugarFromShop();old
    this.getSugarFromShop(2).subscribe(data => {
      console.log(data);
    })
    // PROMISE
    //   this.bringBread().then(
    //     (data: any) => console.log(data)
    //   ).catch(err => console.log(err));
    // }

    // fetchUser(): Observable<any> {
    //   return new Observable(observer => {
    //     const user = { data: { firstname: 'Sam', lastName: 'Bahadur' } };
    //     observer.next(user);
    //   })
  }

  // behacviour

  data: string[] = ['tum hi ho', 'bin tere', 'friuends'];

  fm = new BehaviorSubject('first song');

  changeSongs() {
    for (let song of this.data) {
      this.fm.next(song);
    }
  }

  buysugalbulk() {
    return new Observable(observer => {
      observer.next('sugar is purchased')
    })
  }
  getSugarInQty(qty: number) {
    return new Observable(observer => {
      observer.next('sugar of' + qty + 'KG is here')
    })
  }

  getSugarFromShop(qty: number) {
    // this.buysugalbulk().subscribe(data => {
    //   console.log(data);
    //   this.getSugarInQty(1).subscribe(data => {
    //     console.log(data);
    //   })
    // })
    return this.buysugalbulk()
      .pipe(switchMap(data => { return this.getSugarInQty(qty) }))

  }


  listenRadio(): Observable<any> {
    return interval(1000);
  }


  isBreadAvailable() {
    return false;
  }

  isEggAvailable() {
    return false;
  }

  bringBread(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.isBreadAvailable())
        resolve('here is yourr bread');
      else if (this.isEggAvailable())
        resolve('here is yourr egg');
      else
        reject('bread is not available')
    });
  }


}
