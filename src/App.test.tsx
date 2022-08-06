/* eslint-disable testing-library/no-unnecessary-act */
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import Card from "./components/Card";
import Modal from "./components/Modal";

describe("<App /> Component", () => {
  test("should renders the project with the data-testid 'toDoProject'", () => {
    render(<App />);
    const element = screen.getByTestId("toDoProject");
    expect(element).toBeInTheDocument();
  });

  test("should renders the inputs with the data-testid 'inputs'", () => {
    render(<App />);
    const element = screen.getByTestId("inputs");
    expect(element).toBeInTheDocument();
  });

  test("should renders the cards container with the data-testid 'cards'", () => {
    render(<App />);
    const element = screen.getByTestId("cards");
    expect(element).toBeInTheDocument();
  });

  test("should renders the button submit with the data-testid 'buttonSubmit'", () => {
    render(<App />);
    const element = screen.getByTestId("buttonSubmit");
    expect(element).toBeInTheDocument();
  });

  test('should renders an input number with a placeholder "Deadline in days"', () => {
    render(<App />);
    const element = screen.getByPlaceholderText("Deadline in days");
    expect(element).toBeInTheDocument();
  });

  test("should renders a list of the Component <Card />", () => {
    render(<App />);
    const element = screen.getByRole("list");
    expect(element).toBeInTheDocument();
  });

  test("should renders the input for entering a task the data-testid 'inputForTask'", () => {
    render(<App />);
    const element = screen.getByTestId("inputForTask");
    expect(element).toBeInTheDocument();
  });
});

describe("<Card /> Component", () => {
  test("should renders the button delete with the data-testid 'buttonDelete'", () => {
    const task = {
      taskName: "my task",
      deadline: 3,
    };

    const completed = () => {
      console.log("test");
    };

    render(<Card task={task} completedTask={completed} />);
    const element = screen.getByTestId("buttonDelete");
    expect(element).toBeInTheDocument();
  });

  test('should renders the text "completed"', () => {
    const task = {
      taskName: "my task",
      deadline: 3,
    };

    const completed = () => {
      console.log("test");
    };
    render(<Card task={task} completedTask={completed} />);
    const element = screen.getByText("completed");
    expect(element).toBeInTheDocument();
  });
});

describe("<Modal /> Component", () => {
  test('should renders the text "close"', () => {
    const completed = () => {
      console.log("test");
    };
    render(<Modal modalHandlerClose={completed} text={"task"} />);
    const element = screen.getByText("close");
    expect(element).toBeInTheDocument();
  });

  test("should renders the Modal Component with the data-testid 'modal'", () => {
    const completed = () => {
      console.log("test");
    };
    render(<Modal modalHandlerClose={completed} text={"task"} />);
    const element = screen.getByTestId("modal");
    expect(element).toBeInTheDocument();
  });

  test("should renders the close button with the data-testid 'close'", () => {
    const completed = () => {
      console.log("test");
    };
    render(<Modal modalHandlerClose={completed} text={"task"} />);
    const element = screen.getByTestId("close");
    expect(element).toBeInTheDocument();
  });

  test("should contains the function 'modalHandlerClose' onClick", () => {
    const completed = jest.fn()
    render(<Modal modalHandlerClose={completed} text={"task"} />);
    const close = screen.getByText("close");
    fireEvent.click(close);
    expect(completed).toHaveBeenCalledTimes(1)
  });

});
