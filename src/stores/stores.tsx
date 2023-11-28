import { create } from "zustand";
import { nanoid } from "nanoid";

interface Todo {
    id: string,
    content: string,
    isChecked: boolean,
}

interface TodoState {
    todos: Todo[],
    addTodo: (newContent: string) => void,
    delTodo: (unwantedId: string) => void,
    toggleCheck: (id: string) => void,
    updateContent: (id: string, newContent: string) => void,
}

export const useTodoStore = create<TodoState>((set) => ({
    todos: [],
    addTodo: (newContent) => set((state) => ({ todos: [...state.todos, { id: nanoid(), content: newContent, isChecked: false }] })),
    delTodo: (unwantedId) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== unwantedId) })),
    toggleCheck: (id) => set((state) => ({ todos: state.todos.map((todo) => id === todo.id ? ({ ...todo, isChecked: !todo.isChecked } as Todo) : todo) })),
    updateContent: (id, newContent) => set((state) => ({ todos: state.todos.map((todo) => id === todo.id ? ({ ...todo, content: newContent } as Todo) : todo) })),
}))