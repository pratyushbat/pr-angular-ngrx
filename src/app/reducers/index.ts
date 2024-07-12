import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as fromUser from "./user.reducer";
import * as fromPost from "./post-reducer";

export interface RootReducerState {
    users: fromUser.UserReducerState;
    posts: fromPost.PostReducerState;
}

// master reducer
export const rootReducer: ActionReducerMap<RootReducerState> = {
    users: fromUser.UserReducer,
    posts:fromPost.PostReducer
}


export const getUserState = (state: RootReducerState) => state.users;
export const getUserLoaded = createSelector(getUserState, fromUser.getLoaded);
export const getUserLoading = createSelector(getUserState, fromUser.getLoading);
export const getUserEntities = createSelector(getUserState, fromUser.getEntities);
export const getUsers = createSelector(getUserState, fromUser.getUsers);
export const getUserError = createSelector(getUserState, fromUser.getUserError);
export const getUserById = (state: RootReducerState, id: number) => {
    const entities = getUserEntities(state);
    return entities[id];
};

export const getPostState = (state: RootReducerState) => state.posts;
export const getPostLoaded = createSelector(getPostState, fromPost.getLoaded);
export const getPostLoading = createSelector(getPostState, fromPost.getLoading);
export const getPostEntities = createSelector(getPostState, fromPost.getEntities);
export const getPosts = createSelector(getPostState, fromPost.getPosts);
export const getPostError = createSelector(getPostState, fromPost.getError);
export const getPostById = (state: RootReducerState, id: number) => {
    const entities = getPostEntities(state);
    return entities[id];
  };