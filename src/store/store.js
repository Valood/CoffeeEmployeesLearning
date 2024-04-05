import {combineReducers} from "@reduxjs/toolkit";
import {api} from "./api.js";

export const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
})
