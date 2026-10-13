import { Component, inject, Input } from '@angular/core';
import {Task} from './task/task';
import {DUMMY_TASKS} from './dummy-tasks';
import { NewTaskType, TaskType } from './task.module';
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
  @Input({ required: true }) userId?: string;

  isAddingTask = false;


  tasks: TaskType[] = [...DUMMY_TASKS];

  constructor(private tasksService: TaskService) {}

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

  onAddNewTask(newTask: NewTaskType) {
    if (this.userId) {
      this.tasks = [
        ...this.tasks,
        {
          ...newTask,
          id: crypto.randomUUID(),
          userId: this.userId,
        },
      ];
      this.onCloseAddTaskModal();
    }
  }
}
