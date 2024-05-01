import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./jobSlice";

const jobStore = configureStore({
    reducer: {
        jobs: jobSlice
    }
})

export default jobStore;