/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CoordinatesElevationContext } from "~/context/context";

const ElevationImageCard = () => {
    const { elevation, isLoading } = React.useContext(CoordinatesElevationContext);

    // Calculate the position of the red line based on the elevation
    const offset = 4;
    const maxElevation = 9000;
    const currentElevation = elevation || 0;
    const redLinePosition = (((currentElevation / maxElevation) * 100 || 0) + offset).toPrecision(3);

    return (
        <div className="flex flex-col items-center space-y-4 mt-6">
            <div className="bg-white rounded-lg p-4 shadow-md">
                <h2 className="text-lg font-bold mb-2">Oxygen level</h2>
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    <img src="/elevationGraph.png" alt="logo" />
                    {!isLoading && (
                        <>
                            <div data-testid="red-line"
                                style={{
                                    position: "absolute",
                                    bottom: `${redLinePosition}%`,
                                    left: "0",
                                    width: "100%",
                                    height: "2px",
                                    backgroundColor: "red",
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: `${redLinePosition}%`,
                                    right: "0%",
                                    whiteSpace: "nowrap",
                                    color: "red",
                                    zIndex: 5,

                                }}
                            >
                                {elevation} m
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div >
    );
};

export default ElevationImageCard;
