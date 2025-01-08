import { createAction, props } from '@ngrx/store';
import {IUser} from "../../core/model/user.model";
export const loadUser = createAction(
  '[User] Load Users',
  props<{ payload: number }>()
);

export const userIsLoaded = createAction(
  '[User] User is loaded',
   props<{ payload: { user: IUser } }>()
);
