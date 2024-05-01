import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: 'All jobs',
    initialState: {
        jobDetails: []
    },
    reducers: {

        addJob: (state, action) => {
            const { payload } = action;
            console.log('payload', payload);
            if (!payload || !Array.isArray(payload)) {
                return state;
            }
            return {
                // ...state,
                jobDetails: [...state.jobDetails, ...payload],
            };
        },


    }

})

export const { addJob } = jobSlice.actions;
export default jobSlice.reducer;