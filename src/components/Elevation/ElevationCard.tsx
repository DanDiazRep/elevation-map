import React from "react";
import { CoordinatesElevationContext } from "~/context/context";
import useElevation from "./useElevation";

const ElevationCard = () => {
    useElevation();

    const { coordinates, elevation, isLoading } = React.useContext(CoordinatesElevationContext);
    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-md">
                <h2 className="text-lg font-bold mb-2">Location Information</h2>
                <table className="table-fixed w-full">
                    <tbody>
                        <tr>
                            <td className="w-2/3 font-medium">Latitude:</td>
                            <td id="latitude">{coordinates.lat.toPrecision(5)}°</td>
                        </tr>
                        <tr>
                            <td className="w-2/3 font-medium">Longitude:</td>
                            <td id="longitude">{coordinates.lng.toPrecision(5)}°</td>
                        </tr>
                        <tr>
                            <td className="w-1/3 font-medium">Elevation:</td>
                            <td>
                                {isLoading ? (
                                    <span>Loading...</span>
                                ) : elevation ? (
                                    <span>{elevation} m.</span>
                                ) : (
                                    <span id="elevation" className="w-2/3">Not in the dataset</span>
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ElevationCard;