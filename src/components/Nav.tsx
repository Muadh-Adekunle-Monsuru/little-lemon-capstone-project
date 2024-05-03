import { useEffect, useState } from 'react';
import Logo from './Logo';
import { useLocation, Link } from 'react-router-dom';
import clsx from 'clsx';
export default function Nav() {
	let location = useLocation();
	const [inHome, setInHome] = useState(true);
	const [inBooking, setInBooking] = useState(false);
	useEffect(() => {
		if (location.pathname == '/') {
			setInHome(true);
			setInBooking(false);
			console.log('in home');
		} else {
			setInHome(false);
			setInBooking(true);
			console.log('in books');
		}
	});
	return (
		<nav className='p-2 border-b border-b-gray-500 flex justify-between items-center lg:px-20 bg-transparent backdrop-blur-md'>
			<div className='w-10 cursor-pointer'>
				<Link to={'/'}>
					<Logo />
				</Link>
			</div>
			<ul className='flex gap-3 font-bold'>
				<Link to={'/'}>
					<li
						className={clsx('cursor-pointer', { 'text-littleGreen': inHome })}
					>
						Home
					</li>
				</Link>
				<Link to={'/bookings'}>
					<li
						className={clsx('cursor-pointer', {
							'text-littleGreen': inBooking,
						})}
					>
						Bookings
					</li>
				</Link>
			</ul>
		</nav>
	);
}
