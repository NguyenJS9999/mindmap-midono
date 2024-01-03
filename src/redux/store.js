import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice/counterSlice";
import { todoSlice } from "./slice/todoSlice";
import { mindmapSlice } from "./slice/mindmapSlice";
import { postApi } from "./services/postApi";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todo: todoSlice.reducer, [postApi.reducerPath]: postApi.reducer,
    mindmap: mindmapSlice.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), postApi.middleware];
  },
});

setupListeners(store.dispatch);
