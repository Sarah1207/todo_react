import { IModalPros } from "../Interfaces";

const Modal = ({ modalHandlerClose, text }: IModalPros) => {
  return (
    <div className="todo__project__modal__screen">
      <div className="todo__project__modal__container" data-testid="modal">
        <p className="todo__project__modal__text">{text}</p>
        <span
          className="todo__project__modal__close"
          onClick={modalHandlerClose}
          data-testid="close"
          role="button"
        >
          close
        </span>
      </div>
      
    </div>
  );
};

export default Modal;
