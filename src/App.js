import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
	return (
		<Provider store={store}>
			<div className='container mx-auto h-screen text-center py-20'>
				lol
			</div>
		</Provider>
	);
}

export default App;
