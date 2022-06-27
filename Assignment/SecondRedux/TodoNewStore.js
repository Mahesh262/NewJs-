import { createStore } from "redux";
import { TodoReducers } from "./TodoNewReducers";
export const TodoNewStore= createStore(TodoReducers)