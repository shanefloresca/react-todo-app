import "./Header.css";
import { useTodoStore } from "../stores/stores";
import { useState, KeyboardEvent } from "react";

export default function Header() {
    const addTodo = useTodoStore((state) => state.addTodo);
    const [newContent, setNewContent] = useState<string>("");

    const handleAddButton = () => {
        addTodo(newContent);
        setNewContent("");
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
            handleAddButton();
        }
    }

    return (
        <header className="header">
            <input className="header__input" type="text" value={newContent} onChange={(event) => setNewContent(event.target.value)} onKeyDown={((event) => handleKeyDown(event))} />
            <button className="header__button header__button--add" onClick={handleAddButton}>+</button>
        </header>
    )
}