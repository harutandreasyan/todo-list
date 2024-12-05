import { useState } from "react";

export const AddToDo = ({ onAdd }) => {
    const [text, setText] = useState("")
    const [error, setError] = useState(null)

    const handleSave = () => {
        if (!text.trim()) {
            return setError("Please fill all the fields!")
        }
        onAdd(text.trim())
        setText("")
        setError(null)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSave()
        }
    }

    return (
        <div className="bg-gray-800 text-white p-4 rounded-md mb-4 flex flex-col space-y-2">
            {error && <p className="bg-red-400 p-2 rounded">{error}</p>}
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                type="text"
                className="flex-grow px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Add a new task"
            />
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleSave}
            >
                Save
            </button>
        </div>
    )
}
