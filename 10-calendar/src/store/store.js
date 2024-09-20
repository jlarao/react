import { configureStore, createStore } from "@reduxjs/toolkit";
import { uiSlices, calendarSlices } from "./";

export const store = configureStore({
    reducer: {
        calendar: calendarSlices.reducer,
        ui: uiSlices.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
         serializableCheck: false }),
})