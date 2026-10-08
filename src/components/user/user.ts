import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: string;
  avatar = input.required<string>();
  name = input.required<string>();
  id = input.required<string>();

   @Output() select = new EventEmitter<string>();
  //select = output<string>();

  onSelectUser() {
    this.select.emit(this.id());
  }
}
