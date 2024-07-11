
import { User } from "../models/user";
import { USER_ADD, USER_DELETE, USER_LIST_ERROR, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_UPDATE } from "../actions/user-action";
import { Action } from "../actions";

export interface UserReducerState {
    loading: boolean;
    loaded: boolean;
    error:boolean;
    users: User[]

}

const initialState: UserReducerState = {
    loaded: false,
    loading: false,
    error:false,
    users: []
}

//return a new state based on actiopn
export function UserReducer(state = initialState,action:Action): UserReducerState{
    switch(action.type){
        case USER_LIST_REQUEST:{
            return {...state,loading:true}
        }
        case USER_LIST_ERROR:{
            return {...state,error:true,loading: false}
        }
        case USER_LIST_SUCCESS:{
            const updatedUsers= state.users.concat(action.payload.data)
            return {...state , loading:false,loaded:true,error: false, users:updatedUsers}
        }
        case USER_DELETE:{
            const users= state.users.filter((data:any)=>data.id!= action.payload.id);
            return {...state , ...{users}}
        }
        case USER_UPDATE: {
            const users= state.users.filter((data:any)=>data.id!= action.payload.data.id);
            const updatedUser = users.concat(action.payload.data);
            return {...state, ...{users:updatedUser}}
          }
          case USER_ADD: {
            // const user = action.payload.data;
            // const entity = {[user.id]: user};
            // const newEntities = {...state.entities, ...entity};
            // const newIds = StoreUtility.filterDuplicateIds([...state.ids, user.id]);
            // return {...state, ...{entities: newEntities, ids: newIds}};
            return state;
          }
        default: {
            return state;
          }

    }

}

//selectors=behavioralsubject
export const getLoading =(state:UserReducerState) => state.loading;
export const getLoaded =(state:UserReducerState) => state.loaded;
export const getUsers =(state:UserReducerState) => state.users;
export const getUserError =(state:UserReducerState) => state.error;
 