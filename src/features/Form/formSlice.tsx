import { TodoType } from "../../store";

const initialTodo = { title: "", description: "" };

export default function formReducer(
  state = initialTodo,
  action: { type: string; payload: TodoType }
) {
  switch (action.type) {
    case "action/addTodo":
      return {
        ...state,
        title: action.payload.title,
        description: action.payload.description,
      };

    default:
      return state;
  }
}

export function addTodo(todo: TodoType) {
  return {
    type: "action/addTodo",
    payload: { title: todo.title, description: todo.description },
  };
}
