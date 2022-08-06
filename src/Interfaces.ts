export interface ITask {
  taskName: string;
  deadline: number;
}

export interface IPropsCard {
  task: ITask;
  completedTask(taskCompleted: string): void;
}

export interface IModalPros {
  modalHandlerClose(): void;
  text: string;
}
