import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  protected selectedUser = signal(DUMMY_USERS[randomIndex]);
  protected imagePath = computed(() => this.selectedUser().avatar);

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
