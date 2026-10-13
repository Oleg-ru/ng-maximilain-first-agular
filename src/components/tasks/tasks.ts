import { Component, Input } from '@angular/core';
import {Task} from './task/task';
import { NewTask } from './new-task/new-task';
import { TaskService } from './task-service';

@Component({
  imports: [Task, NewTask],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {
  @Input({ required: true }) name?: string;
  @Input({ required: true }) userId!: string;

  isAddingTask = false;

  constructor(private tasksService: TaskService) {}

  getUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTaskModal() {
    this.isAddingTask = false;
  }
}
