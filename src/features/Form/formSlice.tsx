const initialForm = {
  todo: { title: "", description: "" },
};

export default function formReducer(
  state = initialForm,
  action = { type: "", payload: { title: "", description: "" } }
) {
  switch (action.type) {
    case "action/addTodo":
      return {
        ...state,
        todo: {
          ...state.todo,
          title: action.payload.title,
          description: action.payload.description,
        },
      };
    default:
      return state;
  }
}

export function addTodo(todo: { title: string; description: string }) {
  return {
    type: "action/addTodo",
    payload: { title: todo.title, description: todo.description },
  };
}
