import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import {User} from '../components/user/user';
import { DUMMY_USERS } from '../components/user/dummy-users';
import {Tasks} from "../components/tasks/tasks";

@Component({
  imports: [RouterOutlet, Header, User, Tasks],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  users = DUMMY_USERS;
  name = signal<string>('');

  onSelectUser(id: string) {
    const user = this.users.find(user => user.id === id);
    this.name.set(<string>user?.name);
  }
}
