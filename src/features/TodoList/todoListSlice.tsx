import { TodoType } from "../../store";

const initialTodoList = [{ title: "title todo1", description: "desc1" }];

export default function todoListReducer(
  state = initialTodoList,
  action: { type: string; payload: TodoType }
) {
  switch (action.type) {
    case "action/pushTodo":
      return [...state, action.payload];

    default:
      return state;
  }
}

export function pushTodo(todo: TodoType) {
  return {
    type: "action/pushTodo",
    payload: todo,
  };
}
