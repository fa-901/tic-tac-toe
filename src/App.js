import './styles/style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getStatus, getCurrent, tileClick, restart } from './redux/slices/gameSlice';
import GridItem from './components/GridItem';


function App() {
	const dispatch = useDispatch();
	const boardStatus = useSelector(getStatus);
	const tiles = boardStatus.map((row, rowIndex) => {
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
	return (
		<div className='container mx-auto h-screen text-center py-20 flex flex-col justify-center items-center'>
			<div className="tictac-main grid grid-cols-3">
				{tiles}
			</div>
			<button className='btn-restart' onClick={() => { dispatch(restart()) }}>Restart</button>
		</div>
	);
}

export default App;
