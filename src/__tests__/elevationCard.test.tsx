import React from 'react';
import { render, screen } from '@testing-library/react';
import { CoordinatesElevationContext } from '~/context/context';
import ElevationCard from '~/components/Elevation/ElevationCard';

describe('ElevationCard', () => {
    it('renders the location information correctly', () => {
        const coordinates = { lat: 41.096, lng: -89.648 };
        const elevation = 255;
        const isLoading = false;

        render(
            <CoordinatesElevationContext.Provider
                value={{
                    coordinates,
                    elevation,
                    isLoading,
                    setCoordinates: jest.fn(),
                    setElevation: jest.fn(),
                    setIsLoading: jest.fn(),
                }}
            >
                <ElevationCard />
            </CoordinatesElevationContext.Provider>
        );

        const latitudeElement = screen.getByTestId('latitude');
        const longitudeElement = screen.getByTestId('longitude');
        const elevationElement = screen.getByTestId('elevation');

        expect(latitudeElement).toHaveTextContent('41.096°');
        expect(longitudeElement).toHaveTextContent('-89.648°');
        expect(elevationElement).toHaveTextContent('255 m.');
    });

    it('displays loading message when isLoading is true', () => {
        const coordinates = { lat: 41.096, lng: -89.648 };
        const isLoading = true;

        render(
            <CoordinatesElevationContext.Provider
                value={{
                    coordinates,
                    elevation: 0,
                    isLoading,
                    setCoordinates: jest.fn(),
                    setElevation: jest.fn(),
                    setIsLoading: jest.fn(),
                }}
            >
                <ElevationCard />
            </CoordinatesElevationContext.Provider>
        );

        const loadingElement = screen.getByText('Loading...');

        expect(loadingElement).toBeInTheDocument();
    });

    it('displays "Not in the dataset" message when elevation is null', () => {
        const coordinates = { lat: 41.096, lng: -89.648 };

        render(
            <CoordinatesElevationContext.Provider
                value={{
                    coordinates,
                    elevation: null,
                    isLoading: false,
                    setCoordinates: jest.fn(),
                    setElevation: jest.fn(),
                    setIsLoading: jest.fn(),
                }}
            >
                <ElevationCard />
            </CoordinatesElevationContext.Provider>
        );

        const elevationElement = screen.getByTestId('elevation');

        expect(elevationElement).toHaveTextContent('Not in the dataset');
    });
});
