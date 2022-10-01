import { createSlice } from '@reduxjs/toolkit';

export const pagesSlice = createSlice({
    name: 'pages',
    initialState: 10,
    reducers: {
        CHANGEPAGE: (state, action)=>{
                const page = parseInt(action.payload)
                return page
        }
    }
})

export const { CHANGEPAGE } = pagesSlice.actions;

export default pagesSlice.reducer;
