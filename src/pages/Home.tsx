import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
export default function Home() {
	return (
		<main className='flex-grow bg-[url("/icons_assets/restauranfood.jpg")] bg-center bg-cover '>
			<Nav />
			<Header />
		</main>
	);
}
