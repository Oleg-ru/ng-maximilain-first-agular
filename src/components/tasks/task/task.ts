import { Component, inject, Input } from '@angular/core';
import { TaskType } from '../task.module';
import { Card } from '../../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TaskService } from '../task-service';

@Component({
  imports: [Card, DatePipe],
  selector: 'app-task',
  styleUrl: './task.css',
  templateUrl: './task.html',
})
export class Task {
  @Input({ required: true }) task!: TaskType;
  private tasksService = inject(TaskService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
