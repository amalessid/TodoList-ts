const initialTodoList = [{ title: "", description: "" }];

export default function todoListReducer(
  state = initialTodoList,
  action: { type: string; payload: { title: ""; description: "" } }
) {
  switch (action.type) {
    case "action/pushTodo":
      return [
        ...state,
        {
          title: action.payload.title,
          description: action.payload.description,
        },
      ];
  }
}

export function pushTodo(title: string, description: string) {
  return {
    type: "action/pushTodo",
    action: { title: title, description: description },
  };
}
