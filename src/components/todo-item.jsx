export const ToDoItem = ({ todo: { id, text, completed }, onToggle, onDelete }) => {
    return (
        <div className="bg-gray-800 text-white p-4 rounded-md flex items-center justify-between mb-3">
            <p
                className={`${
                    completed ? "line-through text-gray-400" : "text-white"
                }`}
            >
                {text}
            </p>
            <div className="space-x-2">
                <button
                    className={`w-24 px-4 py-2 rounded text-white ${
                        completed
                            ? "bg-blue-500 text-white rounded hover:bg-blue-600"
                            : "bg-blue-500 hover:bg-blue-600"
                    }`}
                    onClick={() => onToggle(id)}
                >
                    {completed ? "Cancel" : "Complete"}
                </button>
                <button
                    className="w-24 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => onDelete(id)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

