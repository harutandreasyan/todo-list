export const ToDoFilter = ({ currentFilter, onFilterChange }) => {
    const filters = [
        { label: "All", value: "all" },
        { label: "Completed", value: "completed" },
        { label: "Not Completed", value: "notCompleted" },
    ]

    return (
        <div className="flex justify-around mb-4">
            {filters.map((filter) => (
                <button
                    key={filter.value}
                    className={`px-3 py-1 rounded ${
                        currentFilter === filter.value
                            ? "bg-blue-500 text-white"
                            : "bg-gray-700 text-gray-300"
                    } hover:bg-blue-600`}
                    onClick={() => onFilterChange(filter.value)}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    )
}

