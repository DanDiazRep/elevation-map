import React from "react";
import dynamic from "next/dynamic";
import { type WorldMapCoordinates } from "~/types/types";
import { CoordinatesElevationContext } from "~/context/context";
import ElevationCard from "../Elevation/ElevationCard";
import ElevationImageCard from "../Elevation/ElevationImageCard";

const WorldMap = dynamic(() => import("~/components/WorldMap/WorldMap"), {
    ssr: false,
});

const WorldMapElevation: React.FC = () => {


    const [coordinates, setCoordinates] = React.useState<WorldMapCoordinates>({
        lat: 0,
        lng: 0,
    });
    const [elevation, setElevation] = React.useState<number>(0);
    const [isLoading, setIsLoading] = React.useState(false);
    return (
        <CoordinatesElevationContext.Provider value={{ coordinates, setCoordinates, elevation, setElevation, isLoading, setIsLoading }}>

            <div className="grid grid-cols-4 gap-4 h-3/4">
                <div className="col-span-3 rounded-lg shadow-md">
                    <WorldMap />
                </div>
                <div className="col-span-1">
                    <ElevationCard />
                    <ElevationImageCard />
                </div>
            </div>
        </CoordinatesElevationContext.Provider>
    )
}

export default WorldMapElevation;