import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskType } from '../task.module';
import { Card } from '../../../shared/card/card';

@Component({
  imports: [Card],
  selector: 'app-task',
  styleUrl: './task.css',
  templateUrl: './task.html',
})
export class Task {
  @Input({ required: true }) task?: TaskType;

  @Output() complete = new EventEmitter<string>();
  onCompleteTask() {
    this.complete.emit(this.task?.id);
  }
}
