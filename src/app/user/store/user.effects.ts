import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {concatMap, map} from 'rxjs/operators';

import {HttpResponse} from '@angular/common/http';
import {error, loadUser, userIsLoaded} from './user.actions';
import {UserService} from "../service/user.service";
import {IUser} from "../../core/model/user.model";

@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(loadUser),
      concatMap(({payload}) => {
        return this.userService.find(payload).pipe(
          map((resp: HttpResponse<IUser>) => {
            let receivedUser: IUser | undefined = resp.body??undefined;
            if( receivedUser !== undefined) {
              return userIsLoaded({user: receivedUser})
            } else {
              return error({message: 'ein Fehler im Service'})
            }
          })
        )
      })  
    )
  })

  constructor(private actions$: Actions, private userService: UserService) {}

}
