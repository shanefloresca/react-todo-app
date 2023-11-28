import "./Item.css"
import { useTodoStore } from "../stores/stores"

export default function Item({ id = "0", content = "", isChecked = false }) {
    const delTodo = useTodoStore((state) => state.delTodo);
    const toggleCheck = useTodoStore((state) => state.toggleCheck);
    const updateContent = useTodoStore((state) => state.updateContent);

    return (
        <article className="item">
            <input className="item__checkbox" type="checkbox" checked={isChecked} onChange={() => toggleCheck(id)} />
            <input className={`item__input ${isChecked ? 'item__input--line-through' : ''}`} type="text" value={content} onChange={(event) => updateContent(id, event.target.value)} />
            <button className="item__button item__button--delete" onClick={() => delTodo(id)}>x</button>
        </article>
    )
}