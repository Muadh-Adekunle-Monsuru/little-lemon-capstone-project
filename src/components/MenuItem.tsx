import React from 'react';

export default function MenuItem() {
	return (
		<div className='border rounded-xl overflow-hidden shadow-md bg-[#EDEFEE]  '>
			<div>
				<img src='/icons_assets/greeksalad.jpg' />
			</div>
			<div className='px-4 pb-8 pt-3'>
				<div className='flex justify-between items-center py-2'>
					<h2 className='font-markazi font-bold text-xl'>Greek Salad</h2>
					<p className='text-littleOrange text-sm'>$12.99</p>
				</div>
				<div className='pr-5 text-justify'>
					<p className='font-thin text-gray-500 text-xs'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero
						sunt, tempora porro expedita, veniam fugit iusto enim, harum
						sapiente rem ab doloribus quibusdam nemo. Facilis alias fugit facere
						architecto.
					</p>
				</div>
			</div>
		</div>
	);
}
