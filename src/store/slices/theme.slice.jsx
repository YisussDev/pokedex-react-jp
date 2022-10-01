import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: false,
    reducers: {
        CHANGETHEME: (state, action) => {
            return !state
        }
    }
})

export const { CHANGETHEME } = themeSlice.actions;

export default themeSlice.reducer;
