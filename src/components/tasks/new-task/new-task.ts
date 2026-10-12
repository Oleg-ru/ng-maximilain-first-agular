import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-new-task',
  styleUrl: './new-task.css',
  templateUrl: './new-task.html',
})
export class NewTask {
  @Output() closeModal = new EventEmitter<void>();

  onCloseModal() {
    this.closeModal.emit();
  }
}
