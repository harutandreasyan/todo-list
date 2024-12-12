import "./App.css";
import { ToDoList } from "./components/todo-list";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-pink-50 shadow-lg rounded-lg border border-gray-200">
        <div className="p-4">
          <ToDoList />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition:Bounce
          />
        </div>
      </div>
    </div>
  );
}

export default App;
