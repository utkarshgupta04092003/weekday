import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./jobSlice";

// create redux store named jobstore
const jobStore = configureStore({
    reducer: {
        jobs: jobSlice
    }
})

export default jobStore;