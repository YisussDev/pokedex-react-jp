import { createSlice } from '@reduxjs/toolkit';

export const trainerSlice = createSlice({
    name: 'trainer',
    initialState: null,
    reducers: {
        SETTRAINER: (state, action) => {
            const nameRefresh = action.payload
            return nameRefresh
        }
    }
})

export const { SETTRAINER, CHANGEPAGES } = trainerSlice.actions;

export default trainerSlice.reducer;
