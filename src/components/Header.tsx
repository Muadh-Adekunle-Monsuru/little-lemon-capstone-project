import { Link } from 'react-router-dom';
export default function Header() {
	return (
		<header className='text-white grid lg:flex bg-fixed bg-[url("/icons_assets/restauranfood.jpg")] bg-center bg-cover '>
			<section className='lg:w-1/2 lg:px-20 px-5 text-justify py-3 backdrop-blur-sm bg-gray-800/30 h-full flex flex-col justify-center '>
				<h1 className='font-markazi  text-5xl text-gray-200'>Little Lemon</h1>
				<h3 className='font-semibold'>Chicago</h3>
				<p className=' py-3 text-sm'>
					Little Lemon is a charming neighbourhood bistro that serves simple
					food and classic cocktails in a lively but casual environment. The
					restaurant features a locally sourced menu with daily specials
				</p>
				<Link to={'/bookings'}>
					<button className='mt-5 shadow-lg bg-littleOrange p-2 rounded-md text-sm'>
						Reserve A Table
					</button>
				</Link>
			</section>
		</header>
	);
}
