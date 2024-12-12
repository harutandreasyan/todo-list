import { useState } from "react";
import { List } from "./list";
import { AddToDo } from "./todo-add";
import { ToDoFilter } from "./todo-filter";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToDoList = () => {
    const [todos, setTodos] = useState([
        { id: 101, text: "read a book", completed: false },
        { id: 102, text: "eat a burger", completed: true },
        { id: 103, text: "buy flowers", completed: false },
    ])

    const [filter, setFilter] = useState("all")

    const handleAdd = (todo) => {
        setTodos([...todos, todo])
    }

    const toggleTodo = (id) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
    }

    const handleDelete = (id) => {
        toast.success("ToDo has been deleted!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        })
    
        setTodos(todos.filter((item) => item.id !== id))
    }

    const filteredTodos = todos.filter((todo) => {
        if (filter === "completed") return todo.completed
        if (filter === "notCompleted") return !todo.completed
        return true
    })

    return (
        <div className="bg-gray-900 text-white p-6 rounded-md shadow-md max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-blue-400 mb-4">ToDoList</h1>
            <AddToDo onAdd={handleAdd} />
            <ToDoFilter currentFilter={filter} onFilterChange={setFilter} />
            <List items={filteredTodos} onToggle={toggleTodo} onDelete={handleDelete} />
        </div>
    )
}
