import { useSelector } from "react-redux";
import { RootState } from "../../store";

function TodoList() {
  const todoList = useSelector((store: RootState) => store.todoList);

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white bg-opacity-50 shadow-md rounded mr-4 px-8 pt-6 pb-8 mb-4 w-1/4 ">
        <h2 className="text-center font-custom text-4xl">TO DO</h2>
        <br />

        <div className="flex items-center justify-center">
          <ul className="marker:text-sky-400 list-disc pl-5 space-y-3 ">
            {todoList.map((todo) => (
              <li>
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-white bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/4 ">
        <h2 className="text-center font-custom text-4xl">DONE</h2>
        <ul className=" pl-5 space-y-3 "></ul>
        <br />
      </div>
    </div>
  );
}

export default TodoList;
