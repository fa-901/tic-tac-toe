import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
    gridState: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ],
    history: [],
    winner: '',
    currentTurn: 'X',
}

export const gameSlice = createSlice({
    name: 'game',
    initialState: defaultState,
    reducers: {
        tileClick: (state, action) => {
            const { currentTurn, gridState, history } = state;
            const [row, col] = action.payload;
            state.gridState[row][col] = currentTurn;
            state.history.push(`${currentTurn} on row ${row + 1}, column ${col + 1}`);
            state.winner = getWinner(gridState, currentTurn, history);
            state.currentTurn = currentTurn === 'X' ? 'O' : 'X';
        },
        restart: (state, action) => {
            return defaultState;
        },
    },
});

const getWinner = (gridState, player, history) => {
    for (let i = 0; i < gridState.length; i++) {
        /**horizontal rule-checking */
        const sameRow = gridState[i].every((item) => { return item === player });
        if (sameRow) {
            return player
        }

        /**vertical rule-checking */
        let sameCol = true;
        for (let j = 0; j < gridState.length; j++) {
            if (gridState[j][i] !== player) {
                sameCol = false;
            }
        }
        if (sameCol) {
            return player
        }

        /**diagonal rule-checking */
    }
    if (history.length === 9) {
        return 'tie';
    }
    else return '';
}

export const { tileClick, restart } = gameSlice.actions;

export const getBoardStatus = state => state.game;

export default gameSlice.reducer;
