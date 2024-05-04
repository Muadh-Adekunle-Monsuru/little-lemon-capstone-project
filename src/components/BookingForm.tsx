import {
	JSXElementConstructor,
	ReactElement,
	ReactNode,
	ReactPortal,
	useState,
} from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import fakeAPI from './fake';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
export default function BookingForm({ availableSlots, setAvailableSlots }) {
	const [selected, setSelected] = useState<Date>();
	const [time, setTime] = useState('');
	const [guestCount, setGuestCount] = useState('');
	const [occasion, setOccasion] = useState('');
	const [reservation, setReservation] = useState({});

	const [selectedError, setSelectedError] = useState(true);
	const [timeError, setTimeError] = useState(true);
	const [guestCountError, setGuestCountError] = useState(true);
	const [occasionError, setOccasionError] = useState(true);

	const navigate = useNavigate();
	useEffect(() => {
		if (selected) {
			let response = fakeAPI.fetchAPI(selected);
			setAvailableSlots(response);
		}
	}, [selected]);

	const handleSubmit = () => {
		const booking = {
			timeselected: time,
			guest: guestCount,
			occasionselected: occasion,
			dateselected: selected,
		};
		setReservation(booking);

		let response = fakeAPI.submitAPI(reservation);
		if (response) {
			navigate('/success');
		}
	};
	const validate = (e) => {
		e.preventDefault();
		if (selected == null || selected.toString().length == 0) {
			setSelectedError(false);
			return;
		}
		if (time.length == 0) {
			setTimeError(false);
			return;
		}
		if (guestCount.length == 0) {
			setGuestCountError(false);
			return;
		}
		if (occasion.length == 0) {
			setOccasionError(false);
			return;
		}
		handleSubmit();
	};
	return (
		<div className='lg:px-20 py-10 bg-[#EDEFEE]'>
			<form
				className='flex flex-col md:flex-row gap-20 justify-center lg:px-20'
				onSubmit={validate}
			>
				<div>
					<DayPicker mode='single' selected={selected} onSelect={setSelected} />
					<p
						className={clsx('text-xs', 'text-red-600', {
							'hidden': selectedError,
						})}
					>
						* Date Not Selected
					</p>
				</div>
				<div className='flex flex-col gap-2 justify-between py-10'>
					<div className='flex gap-5 border-b p-2'>
						<label htmlFor='time'>Choose a time:</label>
						<select
							className='border  inset-1 rounded-lg border-gray-400 px-2'
							value={time}
							onChange={(e) => setTime(e.target.value)}
						>
							{availableSlots.map(
								(
									val:
										| string
										| number
										| boolean
										| ReactElement<any, string | JSXElementConstructor<any>>
										| Iterable<ReactNode>
										| ReactPortal
										| null
										| undefined,
									index
								) => (
									<option key={index}>{val}</option>
								)
							)}
						</select>
						<p
							className={clsx('text-xs', 'text-red-600', {
								'hidden': timeError,
							})}
						>
							* Time Not Selected
						</p>
					</div>
					<div className='flex gap-5 border-b p-2'>
						<label htmlFor='guests'>Number of Guests</label>
						<input
							type='number'
							placeholder='0'
							min='1'
							max='10'
							id='guests'
							value={guestCount}
							onChange={(e) => setGuestCount(e.target.value)}
							className='border  inset-1 rounded-lg border-gray-400 px-2'
						/>
						<p
							className={clsx('text-xs', 'text-red-600', {
								'hidden': guestCountError,
							})}
						>
							* Guest count not specified
						</p>
					</div>
					<div className='flex gap-5 border-b p-2'>
						<label htmlFor='occasion'>Occasion</label>
						<select
							id='occasion'
							className='border  inset-1 rounded-lg border-gray-400 px-2'
							value={occasion}
							onChange={(e) => setOccasion(e.target.value)}
						>
							<option>Select</option>
							<option>Birthday</option>
							<option>Anniversary</option>
						</select>
						<p
							className={clsx('text-xs', 'text-red-600', {
								'hidden': occasionError,
							})}
						>
							*Occation not specified
						</p>
					</div>
					<button
						className='mt-5 shadow-lg bg-littleOrange p-2 rounded-md text-sm'
						type='submit'
						aria-label='submit your form'
					>
						Reserve A Table
					</button>
				</div>
			</form>
		</div>
	);
}
