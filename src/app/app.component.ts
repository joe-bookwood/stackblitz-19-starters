import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserDetailComponent} from "./user/user-detail/user-detail.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test';
}
