import { Component, computed, Input, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  @Input() avatar!: string;
  @Input() name!: string;
  @Input() id!: string;

  onSelectUser() {
  }
}
