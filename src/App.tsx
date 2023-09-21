import "./App.css";
import { KeyboardEvent, useState, useEffect } from "react";

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

function App() {
  useEffect(() => {
    document.title = "React Todo App";
  }, []);

  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = () => {
    if (input !== "") {
      setTodos((currentTodos) => [
        ...currentTodos,
        {
          id: new Date().getTime(),
          text: input,
          isCompleted: false,
        },
      ]);
      setInput("");
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleDelete = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleCheckbox = (id: number) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            isCompleted: !todo.isCompleted,
          };
        }

        return todo;
      });
    });
  };

  return (
    <>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => handleKeyDown(event)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="todos-container">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleCheckbox(todo.id)}
            />
            <p className={`${todo.isCompleted ? "line-through" : ""}`}>
              {todo.text}
            </p>
            <button onClick={() => handleDelete(todo.id)}>x</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
