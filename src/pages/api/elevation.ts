import { type NextApiRequest, type NextApiResponse } from 'next';
import { type ElevationRequestData, type ElevationResponseData } from '../../types/types';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ElevationResponseData>
): Promise<void> {
    try {
        const { locations, interpolation } = req.body as ElevationRequestData;

        const url = 'https://api.opentopodata.org/v1/srtm90m';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                locations,
                interpolation,
            }),
        });

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.json() as ElevationResponseData;

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal Server Error',
            results: [],
            status: ''
        });
        return;
    }
}
