import { createStore, combineReducers } from "redux";
import formReducer from "./features/Form/formSlice";
import todoListReducer from "./features/TodoList/todoListSlice";

interface TodoType {
  title: string;
  description: string;
}
interface RootState {
  form: TodoType;
  todoList: TodoType[];
}

const rootReducer = combineReducers({
  form: formReducer,
  todoList: todoListReducer,
});

const store = createStore(rootReducer);

export default store;
export type { RootState, TodoType };
