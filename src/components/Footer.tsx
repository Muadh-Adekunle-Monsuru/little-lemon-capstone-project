import React from 'react';

export default function Footer() {
	return (
		<footer className='w-full bg-littleGreen p-4 border-t text-white px-20 flex items-center justify-between text-xs'>
			<div>© Little Lemon 2024</div>
			<div>
				Contanct us:{' '}
				<span className='text-littleOrange'>littlelemon@little.com</span>{' '}
			</div>
		</footer>
	);
}
