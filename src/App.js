import './styles/style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getBoardStatus, tileClick, restart } from './redux/slices/gameSlice';
import GridItem from './components/GridItem';


function App() {
	const dispatch = useDispatch();
	const boardStatus = useSelector(getBoardStatus);
	const tiles = boardStatus.gridState.map((row, rowIndex) => {
		return row.map((col, colIndex) => {
			return (
				<GridItem
					key={`${rowIndex}_${colIndex}`}
					value={col}
					onClick={() => { dispatch(tileClick([rowIndex, colIndex])) }}
				/>
			)
		})
	})

	const historyList = boardStatus.history.map((item, index)=>{
		return <li key={index}>{item}</li>
	})

	return (
		<div className='container mx-auto h-screen text-center py-20 flex flex-col justify-center items-center'>
			<div className='text-3xl mb-10'>
				Player Turn: <b>{boardStatus.currentTurn}</b>
			</div>
			<div className="grid grid-cols-2 space-x-10">
				<div className="tictac-main grid grid-cols-3 flex-1">
					{tiles}
				</div>
				<div className=''>
					{/* <u>
						Moves
					</u> */}
					<ul className='text-left list-disc list-inside'>
						{historyList}
					</ul>
				</div>
			</div>
			<button className='btn-restart' onClick={() => { dispatch(restart()) }}>Restart</button>
		</div>
	);
}

export default App;
