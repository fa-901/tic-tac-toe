import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
    currentTurn: 'X',
    boardStatus: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]
}

export const gameSlice = createSlice({
    name: 'tic',
    initialState: defaultState,
    reducers: {
        swapTurn: (state, action) => {
            const { currentTurn } = state;
            return currentTurn === 'X' ? 'O' : 'X';
        },
    },
});

export const { swapTurn } = gameSlice.actions;

export default gameSlice.reducer;
