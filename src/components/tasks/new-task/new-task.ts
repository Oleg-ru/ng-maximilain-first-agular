import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskType, TaskType } from '../task.module';

@Component({
  imports: [FormsModule],
  selector: 'app-new-task',
  styleUrl: './new-task.css',
  templateUrl: './new-task.html',
})
export class NewTask {
  @Input({ required: true }) userId?: string;

  @Output() closeModal = new EventEmitter<void>();
  @Output() addNewTask = new EventEmitter<NewTaskType>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCloseModal() {
    this.closeModal.emit();
  }

  onSubmit() {
    if (this.userId) {
      this.addNewTask.emit({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      });
    }
  }
}
