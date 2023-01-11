import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/Counter/CounterSlice";
import TodosSlice from "../features/Todos/TodosSlice";

const Store = configureStore({
    reducer:{
        counter: CounterSlice,
        posts: TodosSlice
    }
})
export default Store