import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error.tsx';
import Home from './pages/Home.tsx';
import Bookings from './pages/Bookings.tsx';
import ConfirmationPage from './pages/ConfirmationPage.tsx';
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/bookings',
				element: <Bookings />,
			},
			{
				path: '/success',
				element: <ConfirmationPage />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
