import React from 'react';

export default function MenuItem({ imgsrc, title, description }) {
	return (
		<div className='border rounded-xl overflow-hidden shadow-md bg-[#EDEFEE]  '>
			<div className='w-[300px] h-[150px] object-fill items-center overflow-hidden'>
				<img src={imgsrc} />
			</div>
			<div className='px-4 pb-8 pt-3'>
				<div className='flex justify-between items-center py-2'>
					<h2 className='font-markazi font-bold text-xl'>{title}</h2>
					<p className='text-littleOrange text-sm'>$12.99</p>
				</div>
				<div className='pr-5 text-justify'>
					<p className='font-thin text-gray-500 text-xs'>{description}</p>
				</div>
			</div>
		</div>
	);
}
