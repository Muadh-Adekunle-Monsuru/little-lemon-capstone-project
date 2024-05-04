import { useState } from 'react';
import BookingForm from '../components/BookingForm';

export default function Bookings() {
	const [availableSlots, setAvailableSlots] = useState([
		'Select',
		'10:00',
		'11:00',
		'12:00',
		'1:00',
		'2:00',
		'3:00',
	]);
	return (
		<main className='bg-[#EDEFEE] lg:h-[86vh]'>
			<h1
				className='font-markazi text-3xl lg:px-20 pt-10 text-center lg:text-left'
				data-test-id='heading'
			>
				Book a Reservation
			</h1>
			<BookingForm
				availableSlots={availableSlots}
				setAvailableSlots={setAvailableSlots}
			/>
		</main>
	);
}
