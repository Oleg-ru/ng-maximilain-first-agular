import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task-service';

@Component({
  imports: [FormsModule],
  selector: 'app-new-task',
  styleUrl: './new-task.css',
  templateUrl: './new-task.html',
})
export class NewTask {
  @Input({ required: true }) userId?: string;
  @Output() closeModal = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TaskService);

  onCloseModal() {
    this.closeModal.emit();
  }

  onSubmit() {
    if (this.userId) {
      this.tasksService.addTask({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      }, this.userId);
    }
    this.onCloseModal();
  }
}
