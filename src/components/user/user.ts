import { Component, EventEmitter, Input, input, Output } from '@angular/core';

type UserType = { id: string; name: string; avatar: string };

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  @Input({ required: true }) user!: UserType;

  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();

  @Output() select = new EventEmitter<string>();
  //select = output<string>();

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
