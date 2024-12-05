import { useState } from "react";
import { List } from "./list";
import { AddToDo } from "./todo-add";
import { ToDoFilter } from "./todo-filter";

export const ToDoList = () => {
    const [todos, setTodos] = useState([
        { id: 101, text: "read a book", completed: false },
        { id: 102, text: "eat a burger", completed: true },
        { id: 103, text: "buy flowers", completed: false },
    ])

    const [filter, setFilter] = useState("all")

    const addTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
    }

    const toggleTodo = (id) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const filteredTodos = todos.filter((todo) => {
        if (filter === "completed") return todo.completed
        if (filter === "notCompleted") return !todo.completed
        return true
    })

    return (
        <div className="bg-gray-900 text-white p-6 rounded-md shadow-md max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-blue-400 mb-4">ToDoList</h1>
            <AddToDo onAdd={addTodo} />
            <ToDoFilter currentFilter={filter} onFilterChange={setFilter} />
            <List items={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </div>
    )
}
