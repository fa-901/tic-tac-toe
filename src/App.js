import './styles/style.scss';
import { useSelector } from 'react-redux';
import { getStatus, getCurrent } from './redux/slices/gameSlice';
import GridItem from './components/GridItem';


function App() {
	const boardStatus = useSelector(getStatus);
	const tiles = boardStatus.map((row, rowIndex) => {
		return row.map((col, colIndex) => {
			return (
				<GridItem key={`${rowIndex}_${colIndex}`} value={col} />
			)
		})
	})
	return (
		<div className='container mx-auto h-screen text-center py-20 flex flex-col justify-center items-center'>
			<div className="tictac-main grid grid-cols-3">
				{tiles}
			</div>
		</div>
	);
}

export default App;
