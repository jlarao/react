import { configureStore } from "@reduxjs/toolkit";
import { authSlices } from "./auth";
import { journalSlices } from "./Journal";

export const store = configureStore({
    reducer: {
        auth: authSlices.reducer,
        journal: journalSlices.reducer,
    },
});