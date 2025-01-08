import {createReducer, on} from '@ngrx/store';
import {userIsLoaded} from './user.actions';
import {IUser} from "../../core/model/user.model";

export const userFeatureKey = 'user';

export interface State {
  user?: IUser
}

export const initialState: State = {
  user: undefined
};


export const reducer = createReducer(
  initialState,

  on(userIsLoaded, (state, {payload}) => ({
    ...state,
    user: payload.user
  }))

);

