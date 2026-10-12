import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskType } from '../task.module';

@Component({
  imports: [FormsModule],
  selector: 'app-new-task',
  styleUrl: './new-task.css',
  templateUrl: './new-task.html',
})
export class NewTask {
  @Input({required: true}) userId?: string;

  @Output() closeModal = new EventEmitter<void>();
  @Output() addNewTask = new EventEmitter<TaskType>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCloseModal() {
    this.closeModal.emit();
  }

  onSubmit() {
    if (this.userId) {
      this.addNewTask.emit({
        id: crypto.randomUUID(),
        userId: this.userId,
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      });
    }
  }
}
