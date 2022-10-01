import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './slices/theme.slice'
import trainerSlice from './slices/trainer.slice'
import pagesSlice from './slices/pages.slice'

export default configureStore({
    reducer: {
        trainer: trainerSlice,
        theme: themeSlice,
        pages: pagesSlice
    }
})
