export type ElevationRequestData = {
    locations: string;
    interpolation: string;
};

export type CountryRequestData = {
    coordinates: WorldMapCoordinates;
    key: string;
};

export type ElevationResponseData = {
    results: ElevationResults[];
    status: string;
    error?: string;
};
export type ElevationResults = {
    "dataset": string,
    "elevation": number,
    "location": {
        "lat": number,
        "lng": number
    }
};

export type WorldMapCoordinates = {
    "lat": number,
    "lng": number
};