import { Component, Input } from '@angular/core';
import {Task} from './task/task';
import {DUMMY_TASKS} from './dummy-tasks';
import {TaskType} from "./task.module";
import { NewTask } from './new-task/new-task';

@Component({
  imports: [Task, NewTask],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {
  @Input({ required: true }) name?: string;
  @Input({ required: true }) userId?: string;

  isAddingTask = false;

  tasks: TaskType[] = [...DUMMY_TASKS];

  getUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: String) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    console.log(this.tasks);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTaskModal() {
    this.isAddingTask = false;
  }
}
