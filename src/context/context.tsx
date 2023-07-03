/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";
import { type WorldMapCoordinates } from "~/types/types";

export const CoordinatesElevationContext = createContext<{
    coordinates: WorldMapCoordinates;
    setCoordinates: React.Dispatch<React.SetStateAction<WorldMapCoordinates>>;
    elevation: number;
    setElevation: React.Dispatch<React.SetStateAction<number>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}>({
    coordinates: { lat: 0, lng: 0 },
    setCoordinates: () => { },
    elevation: 0,
    setElevation: () => { },
    isLoading: false,
    setIsLoading: () => { },
});

