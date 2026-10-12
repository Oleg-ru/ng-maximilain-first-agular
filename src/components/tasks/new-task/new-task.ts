import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-new-task',
  styleUrl: './new-task.css',
  templateUrl: './new-task.html',
})
export class NewTask {
  @Output() closeModal = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCloseModal() {
    this.closeModal.emit();
  }
}
