import axios from "axios";
import { useForm } from "react-hook-form";

export const AddToDo = ({ onAdd }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleSave = (data) => {
    axios
      .post("http://localhost:3000/todos", data)
      .then((res) => {
        console.log(res.data);
        reset();
        onAdd(res.data);
      });
  };

  return (
    <>
      <p className="text-blue-800 text-base font-semibold mb-2">Add Todo</p>
      <div className="flex flex-col space-y-2 p-4">
        {errors.text && (
          <p className="text-sm bg-blue-100 text-blue-800 p-2 rounded-lg border border-blue-200">
            {errors.text.message}
          </p>
        )}
        <div className="flex items-center space-x-2">
          <form
            onSubmit={handleSubmit(handleSave)}
            className="flex flex-col w-full bg-gray-100 p-4 rounded-lg shadow-md"
          >
            <input
              {...register("text", { required: "Please fill the field" })}
              type="text"
              placeholder="Enter a new task"
              className="flex-1 p-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <input
              {...register("description")}
              type="text"
              placeholder="Provide a description"
              className="flex-1 p-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-400 text-white-800 rounded-lg hover:bg-blue-800 transition"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
  