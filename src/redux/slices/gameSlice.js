import { createSlice } from '@reduxjs/toolkit';
import { LOCAL_STATE_KEY } from '../../constants';

const localData = localStorage.getItem(LOCAL_STATE_KEY) ? JSON.parse(localStorage.getItem(LOCAL_STATE_KEY)) : '';

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
    initialState: localData ? localData : defaultState,
    reducers: {
        tileClick: (state, action) => {
            const { currentTurn, gridState, history } = state;
            const [row, col] = action.payload;
            state.gridState[row][col] = currentTurn;
            state.history.push(`${currentTurn} on row ${row + 1}, column ${col + 1}`);
            state.winner = getWinner(gridState, currentTurn, history);
            state.currentTurn = currentTurn === 'X' ? 'O' : 'X';
            localStorage.setItem(LOCAL_STATE_KEY, JSON.stringify(state));
        },
        restart: (state, action) => {
            localStorage.setItem(LOCAL_STATE_KEY, JSON.stringify(defaultState));
            return defaultState;
        },
    },
});

const getWinner = (gridState, player, history) => {
    let ltrDiagonal = [];
    let rtlDiagonal = [];
    let reversed = [...gridState].reverse();
    for (let i = 0; i < gridState.length; i++) {
        /**horizontal rule-checking */
        const sameRow = gridState[i].every((item) => { return item === player });
        if (sameRow) {
            return player
        }

        /**vertical rule-checking */
        let sameCol = true;
        for (let j = 0; j < gridState[i].length; j++) {
            if (gridState[j][i] !== player) {
                sameCol = false;
            }
            if (j === i) {
                ltrDiagonal.push(gridState[i][j]);
                rtlDiagonal.push(reversed[i][j]);
            }
        }
        if (sameCol) {
            return player;
        }
        /**diagonal rule-checking */
    }
    let sameDiagonal = ltrDiagonal.every((item) => { return item === player }) || rtlDiagonal.every((item) => { return item === player });
    if (sameDiagonal) {
        return player;
    }
    if (history.length === 9) {
        return 'tie';
    }
    else return '';
}

export const { tileClick, restart } = gameSlice.actions;

export const getBoardStatus = state => state.game;

export default gameSlice.reducer;
