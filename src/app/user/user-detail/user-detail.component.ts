import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {IUser} from "../../core/model/user.model";
import {select, Store} from "@ngrx/store";
import {userSelector} from "../store/user.selectors";
import {loadUser} from "../store/user.actions";
import {FormsModule} from "@angular/forms";
import {AsyncPipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-user-detail',
  imports: [
    FormsModule,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
public userId: number = -1;
  user$: Observable<IUser | undefined>;
 constructor(private store: Store) {
    this.user$ = this.store.pipe(select(userSelector));
  }

  ngOnInit() {
    this.userId = 1;
  }

  sendLoadAction(payload: number): void {
    console.log('id=', payload);
    if (payload > 0) {
      this.userId = payload;
      console.log('fire load action: ', payload);
      this.store.dispatch(loadUser({payload: payload}));
    }

  }

}
