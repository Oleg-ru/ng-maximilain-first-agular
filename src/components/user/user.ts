import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserType } from './user.model';
import { Card } from '../../shared/card/card';

@Component({
  imports: [Card],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  @Input({ required: true }) user!: UserType;
  @Input({ required: true }) selected!: boolean;

  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();

  @Output() select = new EventEmitter<string>();
  //select = output<string>();

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
