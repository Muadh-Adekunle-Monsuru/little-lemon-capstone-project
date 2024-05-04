import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';
export default function Main() {
	return (
		<div className=' lg:px-20 py-10'>
			<div className='font-markazi text-3xl'>Specials</div>
			<div className='flex gap-5 py-3 justify-between px-20'>
				<MenuItem />
				<MenuItem />
				<MenuItem />
			</div>
			<div className='flex justify-center'>
				<Link to={'/bookings'}>
					<button className='mt-5 shadow-lg bg-littleOrange p-2 rounded-md text-sm'>
						Reserve A Table
					</button>
				</Link>
			</div>
		</div>
	);
}
