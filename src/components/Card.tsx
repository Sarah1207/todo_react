import React from "react";
import { IPropsCard } from "../Interfaces";

const Card = ({ task, completedTask }: IPropsCard) => {
  return (
    <div className="todo__project__card">
      <p className="todo__project__card__para">
        <span className="todo__project__card__para__title">Task:</span>
        {task.taskName}
      </p>
      <p>
        <span className="todo__project__card__para__title">Deadline:</span>
        {task.deadline} {''} {task.deadline > 1 ? 'days' : 'day'}
      </p>
      <button
        onClick={() => {
          completedTask(task.taskName);
        }}
        className="todo__project__card__completed__button"
        data-testid="buttonDelete"
      >
        completed
      </button>
    </div>
  );
};

export default Card;
