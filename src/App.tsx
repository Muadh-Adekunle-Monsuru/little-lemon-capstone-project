import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
function App() {
	return (
		<>
			<div className='flex flex-col'>
				<Nav />
				<Outlet />
				<Footer />
			</div>
		</>
	);
}

export default App;
