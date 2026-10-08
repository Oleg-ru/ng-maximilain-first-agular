import {Component, signal} from '@angular/core';
import {Header} from '../components/header/header';
import {User} from '../components/user/user';
import {DUMMY_USERS} from '../components/user/dummy-users';
import {Tasks} from "../components/tasks/tasks";

@Component({
  imports: [Header, User, Tasks],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  users = DUMMY_USERS;
  userId = '';

  get selectedUser() {
    return this.users.find((user) => user.id === this.userId);
  }

  onSelectUser(id: string) {
    this.userId = id;
  }
}
