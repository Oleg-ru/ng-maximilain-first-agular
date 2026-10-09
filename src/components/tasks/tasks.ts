import { Component, Input } from '@angular/core';
import {Task} from './task/task';
import {DUMMY_TASKS} from './dummy-tasks';

@Component({
  imports: [Task],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {
  @Input({ required: true }) name?: string;
  @Input({required: true}) userId?: string;

  getUserTasks() {
    return DUMMY_TASKS.filter((task) => task.userId === this.userId);
  }
}
