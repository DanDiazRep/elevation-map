import React from 'react';
import { render, screen } from '@testing-library/react';
import ElevationImageCard from '~/components/Elevation/ElevationImageCard';
import { CoordinatesElevationContext } from '~/context/context';

describe('ElevationImageCard', () => {
    it('renders the elevation image and red line correctly', () => {
        const elevation = 2200;

        render(<ElevationImageCard />, {
            wrapper: ({ children }) => (
                <CoordinatesElevationContext.Provider value={{
                    coordinates: { lat: 0, lng: 0 },
                    setCoordinates: jest.fn(),
                    elevation,
                    setElevation: jest.fn(),
                    isLoading: false,
                    setIsLoading: jest.fn(),
                }}>
                    {children}
                </CoordinatesElevationContext.Provider>
            ),
        });

        const imageElement = screen.getByAltText('logo');
        expect(imageElement).toBeInTheDocument();

        const redLineElement = screen.getByTestId('red-line');
        expect(redLineElement).toHaveStyle({ bottom: '28.4%', backgroundColor: 'red' });

        const elevationValueElement = screen.getByText(`${elevation} m`);
        expect(elevationValueElement).toBeInTheDocument();
    });


});
