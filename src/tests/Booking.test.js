import { render, fireEvent, screen } from '@testing-library/react';
import Bookings from '../pages/Bookings.tsx';

test('Check Page Render', () => {
	render(<Bookings />);
	const heading = screen.getByTestId('heading');
	expect(heading).toHaveTextContent('Book a Reservation');
});
