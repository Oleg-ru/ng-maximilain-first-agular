import { Component, Input } from '@angular/core';
import { TaskType } from '../dummy-tasks';

@Component({
  imports: [],
  selector: 'app-task',
  styleUrl: './task.css',
  templateUrl: './task.html',
})
export class Task {
  @Input({ required: true }) task?: TaskType;
}
