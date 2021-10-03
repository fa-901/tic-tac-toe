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
    name: 'game',
    initialState: defaultState,
    reducers: {
        swapTurn: (state, action) => {
            const { currentTurn } = state;
            return currentTurn === 'X' ? 'O' : 'X';
        },
    },
});

export const { swapTurn } = gameSlice.actions;

export const getStatus = state => state.game.boardStatus;
export const getCurrent = state => state.game.currentTurn;

export default gameSlice.reducer;
