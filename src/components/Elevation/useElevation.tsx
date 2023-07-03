import { useContext, useEffect } from 'react';
import { CoordinatesElevationContext } from '~/context/context';
import { type ElevationResponseData } from '~/types/types';

function useElevation() {
    const { coordinates, setElevation, setIsLoading } = useContext(CoordinatesElevationContext);

    useEffect(() => {
        const getElevationData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('/api/elevation', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        locations: `${coordinates.lat},${coordinates.lng}`,
                        interpolation: 'cubic',
                    }),
                });

                if (!response.ok) {
                    console.error(response);
                    throw new Error('API request failed');
                }

                const data: ElevationResponseData = await response.json() as ElevationResponseData;
                setElevation(data.results[0]?.elevation ?? 0);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        void getElevationData();
    }, [coordinates, setElevation, setIsLoading]);
}

export default useElevation;
