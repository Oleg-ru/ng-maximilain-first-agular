import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import {User} from '../components/user/user';
import { DUMMY_USERS } from '../components/user/dummy-users';

@Component({
  imports: [RouterOutlet, Header, User],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  users = DUMMY_USERS;
}
