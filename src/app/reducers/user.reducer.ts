
import { User } from "../models/user";
import { USER_ADD, USER_DELETE, USER_LIST_ERROR, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_UPDATE } from "../actions/user-action";
import { Action } from "../actions";
import { StoreUtility } from "../utils/store-utility.component";
import { createSelector } from "@ngrx/store";

export interface UserReducerState {
    loading: boolean;
    loaded: boolean;
    error: boolean;
    entities: { [id: number]: User },
    ids: number[]

    //  User[]

}

const initialState: UserReducerState = {
    loaded: false,
    loading: false,
    error: false,
    entities: {},
    ids: []
    // users: []
}

//return a new state based on actiopn
export function UserReducer(state = initialState, action: Action): UserReducerState {
    switch (action.type) {
        case USER_LIST_REQUEST: {
            return { ...state, loading: true }
        }
        case USER_LIST_ERROR: {
            return { ...state, error: true, loading: false }
        }
        case USER_LIST_SUCCESS: {
            const users =action.payload.data;
            const obj=StoreUtility.normalize(users);
            const newEntites ={...state.entities,...obj};
            const ids=users.map((user:any)=>user.id);
            const newIds=StoreUtility.filterDuplicateIds( [...state.ids, ...ids]);
            return { ...state, ...{ loading: false, loaded: true, error: false, entities:newEntites,ids:newIds } }
            // const updatedUsers = state.users.concat(action.payload.data)
            // return { ...state, loading: false, loaded: true, error: false, users: updatedUsers }
        }
        case USER_DELETE: {
           const id= action.payload.id;
           const newids=state.ids.filter((element: any) => element != id)
           const newentities=StoreUtility.removeKey(state.entities,id);
            return { ...state, ...{ entities:newentities,ids:newids } }
        }
        case USER_UPDATE: {
         const user=action.payload.data;
         const entity= {[user.id]:user};
         const updatedEntites={...state.entities,...entity};
         return { ...state, ...{ entities: updatedEntites } }
            // const users = state.users.filter((data: any) => data.id != action.payload.data.id);
            // const updatedUser = users.concat(action.payload.data);
            // return { ...state, ...{ users: updatedUser } }
        }
        case USER_ADD: {
            const user:any=action.payload.data;
            const entity= {[user.id]:user};
            const newEntites={...state.entities,...entity};
            const newIds=StoreUtility.filterDuplicateIds( [...state.ids, user.id]);
            return { ...state, ...{ entities: newEntites,ids:newIds } }
            // const updatedUsers = state.users.concat(action.payload.data);
            // return { ...state, ...{ users: updatedUsers } };




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
export const getLoading = (state: UserReducerState) => state.loading;
export const getLoaded = (state: UserReducerState) => state.loaded;
export const getEntities = (state: UserReducerState) => state.entities;
export const getIds = (state: UserReducerState) => state.ids;
// 1st way
// export const getUsers = createSelector(getEntities,getIds,(entities,ids)=>ids.map((id:any)=>entities[id]));
// 2nd way
export const getUsers = createSelector(getEntities,getIds,(entities,ids)=> StoreUtility.unNormalized(entities));
export const getUserError = (state: UserReducerState) => state.error;
