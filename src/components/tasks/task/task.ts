import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskType } from '../task.module';
import { Card } from '../../../shared/card/card';
import { DatePipe } from '@angular/common';

@Component({
  imports: [Card, DatePipe],
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
