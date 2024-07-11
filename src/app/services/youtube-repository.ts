import { Injectable } from "@angular/core";
import { getUserLoaded, getUserLoading, getUsers, RootReducerState } from "../reducers";
import { Store } from "@ngrx/store";
import { ApiService } from "./api.service";
import { combineLatest, Observable } from "rxjs";
import { UserListRequestAction, UserListSuccessAction } from "../actions/user-action";
import { User } from "../models/user";

@Injectable()
export class YoutubeRepository {
    
    constructor(private apiService: ApiService, private store: Store<RootReducerState>){    }

    getUserList(force=false):[Observable<boolean>,Observable<User[]>]{
        const loading$ = this.store.select(getUserLoading);
        const loaded$ = this.store.select(getUserLoaded);
        const getUserData$:Observable<User[]> = this.store.select(getUsers);
       
        combineLatest([loaded$,loading$]).subscribe((data)=>{
          if((!data[0] && !data[1]) || force){
              this.store.dispatch(new UserListRequestAction())
            this.apiService.getAllUser().subscribe((data2: any) => {
              setTimeout(()=>{             
                this.store.dispatch(new UserListSuccessAction({ data: data2.users }))
              },3000);
           
            });
          }
        });
        return [loaded$,getUserData$];
    }
 
}
