import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    // toggleTodo: (state, action) => {},
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;
