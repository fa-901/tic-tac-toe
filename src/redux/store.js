import { configureStore } from '@reduxjs/toolkit';
import gameSlice from './slices/gameSlice';

export default configureStore({
    reducer: {
        game: gameSlice,
    },
});