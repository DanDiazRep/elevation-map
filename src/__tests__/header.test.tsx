import { render, screen } from '@testing-library/react';
import Header from '~/components/Layout/Header';

describe('Header', () => {
    it('renders the logo and heading', () => {
        render(<Header />);

        const logoElement = screen.getByAltText('logo');
        const headingElement = screen.getByRole('heading', { level: 1, name: /Elevation Finder/i });

        expect(logoElement).toBeInTheDocument();
        expect(headingElement).toBeInTheDocument();
    });

    it('renders the subtitle', () => {
        render(<Header />);

        const subtitleElement = screen.getByText(/Explore elevation levels by interacting with the map/i);

        expect(subtitleElement).toBeInTheDocument();
    });
});
