import { useDispatch } from "react-redux";
import { addTodo } from "./formSlice";
import { useState } from "react";
import store from "../../store";

function Form() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({ title: "", description: "" });

  function handleClick() {
    dispatch(addTodo(todo));
    console.log(store.getState());
  }
  return (
    <div className=" flex items-center mt-7 justify-center">
      <input
        type="text"
        className="bg-gray-200 mr-2 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-white-500"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value.toString() })}
      />
      <input
        type="text"
        className="bg-gray-200 ml-2 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-white-500"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        +
      </button>
    </div>
  );
}

export default Form;
