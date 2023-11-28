import "./Container.css";
import Item from "./Item";

import { useTodoStore } from "../stores/stores";

export default function Container() {

    const todos = useTodoStore((state) => state.todos);

    return (
        <main className="container">
            {todos.map((todo) => <Item id={todo.id} content={todo.content} isChecked={todo.isChecked} />)}
        </main>
    )
}