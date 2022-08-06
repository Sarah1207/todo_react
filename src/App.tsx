import React, { ChangeEvent, FC, useState } from "react";
import './styles/app.scss'
import Card from "./components/Card";
import Modal from "./components/Modal";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [allTasks, setallTasks] = useState<ITask[]>([]);
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(1);
  const [isShowModal, setIsShowModal] = useState<Boolean>(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else if (e.target.name === "deadline") {
      setDeadline(Number(e.target.value));
    }
  };

  const handleClickAddTask = (e: any): void => {
    e.preventDefault();
    const newTask = { taskName: task, deadline: deadline };
    if (newTask.taskName.length > 0) {
      setallTasks([...allTasks, newTask]);
      setTask("");
      setDeadline(1);
    } else {
      setIsShowModal(true);
    }
  };

  const completedTask = (taskNameCompleted: string): void => {
    const newList = allTasks.filter((task) => {
      return task.taskName !== taskNameCompleted;
    });
    setallTasks(newList);
  };

  const modalHandlerClose = () => {
    setIsShowModal(false);
  };

  return (
    <>
      <div className="todo__project" data-testid="toDoProject">
        <div className="todo__project__input__container" data-testid="inputs">
          <input
            type="text"
            placeholder="Add a task"
            name="task"
            value={task}
            onChange={handleOnChange}
            className="todo__project__input"
            data-testid="inputForTask"
          />
          <input
            type="number"
            placeholder="Deadline in days"
            min={1}
            name="deadline"
            value={deadline}
            onChange={handleOnChange}
            className="todo__project__input"
          />
          <button
            onClick={handleClickAddTask}
            className="todo__project__add__button"
            data-testid="buttonSubmit"
          >
            Add task
          </button>
        </div>

        <div className="todo__project__card__container" role="list" data-testid="cards">
          {allTasks.map((task: ITask, key: number) => {
            return <Card key={key} task={task} completedTask={completedTask} />;
          })}
        </div>
      </div>

      {isShowModal && (
        <Modal
          modalHandlerClose={modalHandlerClose}
          text="You should add some text"
        />
      )}
    </>
  );
};

export default App;
