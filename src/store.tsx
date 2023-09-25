import { createStore, combineReducers } from "redux";
import formReducer from "./features/Form/formSlice";
import todoListReducer from "./features/TodoList/todoListSlice";

const rootReducer = combineReducers({
  form: formReducer,
  todoList: todoListReducer,
});

const store = createStore(rootReducer);

export default store;
