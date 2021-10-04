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
        tileClick: (state, action) => {
            const { currentTurn } = state;
            const [row, col] = action.payload;
            state.boardStatus[row][col] = currentTurn;
            state.currentTurn = currentTurn === 'X' ? 'O' : 'X';
        },
        restart: (state, action) => {
            return defaultState;
        },
    },
});

export const { tileClick, restart } = gameSlice.actions;

export const getStatus = state => state.game.boardStatus;
export const getCurrent = state => state.game.currentTurn;

export default gameSlice.reducer;
