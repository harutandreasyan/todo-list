import { ToDoItem } from "./todo-item";

export const List = ({ items, onToggle, onDelete }) => {
    return (
        <div className="bg-gray-900 text-white p-4 rounded-md">
            <h2 className="text-xl font-semibold text-blue-300 mb-4">List</h2>
            <div className="space-y-3">
                {items.map((todo) => (
                    <ToDoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
};
