import { configureStore, createStore } from "@reduxjs/toolkit";
import { uiSlices, calendarSlices, authSlices } from "./";

export const store = configureStore({
    reducer: {
        auth: authSlices.reducer,
        calendar: calendarSlices.reducer,
        ui: uiSlices.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
         serializableCheck: false }),
})