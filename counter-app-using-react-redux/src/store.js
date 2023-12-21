import { configureStore } from "@reduxjs/toolkit"
import { todosSlice } from "./todoSlice"


const store = configureStore({
    reducer: todosSlice.reducer
})

export default store