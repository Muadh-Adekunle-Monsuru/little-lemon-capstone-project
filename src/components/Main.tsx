import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';
export default function Main() {
	return (
		<div className=' lg:px-20 py-10'>
			<div className='font-markazi text-3xl'>Specials</div>
			<div className='flex gap-5 py-3 justify-between px-20'>
				<MenuItem
					imgsrc={'/icons_assets/greeksalad.jpg'}
					title={'Greek Salad'}
					description={
						'Experience the flavors of Greece with our refreshing Greek salad, a vibrant combination of crisp lettuce, juicy tomatoes, cucumbers, red onions, briny Kalamata olives, and creamy feta cheese, all tossed in a light and tangy Greek dressing.'
					}
				/>
				<MenuItem
					imgsrc={'/icons_assets/lemondessert.jpg'}
					title={'Lemon Desert'}
					description={
						'Indulge in our zesty lemon dessert, a tantalizing blend of tangy lemon curd nestled in a buttery crust, garnished with whipped cream and a hint of lemon zest for the perfect balance of sweet and citrus.'
					}
				/>
				<MenuItem
					imgsrc={'/icons_assets/bruchetta.png'}
					title={'Bruchetta'}
					description={
						'A delightful Italian appetizer featuring toasted bread topped with ripe tomatoes, fresh basil, garlic, and extra virgin olive oil, finished with a sprinkle of Parmesan cheese.'
					}
				/>
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
