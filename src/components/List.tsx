import { useState } from "react";
import { useForm } from "react-hook-form";

export const List = () => {
  const [todoList, setTodoList] = useState(["todo1", "todo2", "todo3"]);
  const [done, setDone] = useState([""]);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      todo: "Amal",
    },
  });

  function addTodo({ todo }: { todo: string }) {
    if (todo) setTodoList((todoList) => [...todoList, todo]);
  }

  function handleDeleteClick(index: number) {
    const updatedTodoList = [...todoList];

    setDone([...done, todoList[index]]);
    updatedTodoList.splice(index, 1);

    // Update the state with the modified todoList
    setTodoList(updatedTodoList);
  }

  return (
    <>
      <form
        className=" flex items-center justify-center"
        onSubmit={handleSubmit(addTodo)}
      >
        <input
          id="myInput"
          type="text"
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-white-500"
          {...register("todo")}
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          +
        </button>
      </form>

      <br />
      <br />
      <div className="flex justify-center items-center">
        <div className="bg-white bg-opacity-50 shadow-md rounded mr-4 px-8 pt-6 pb-8 mb-4 w-1/4 ">
          <h2 className="text-center font-custom text-4xl">TO DO</h2>
          <br />

          <div className="flex items-center justify-center">
            <ul className="marker:text-sky-400 list-disc pl-5 space-y-3 ">
              {todoList.map((todoItem, index) => (
                <li key={index} onClick={() => handleDeleteClick(index)}>
                  <p className="font-custom text-3xl"> {todoItem}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-white bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/4 ">
          <h2 className="text-center font-custom text-4xl">DONE</h2>
          <ul className=" pl-5 space-y-3 ">
            {done.map((doneItem, index) => (
              <li key={index}>
                <p className="line-through font-custom text-3xl"> {doneItem}</p>
              </li>
            ))}
          </ul>
          <br />
        </div>
      </div>
    </>
  );
};
