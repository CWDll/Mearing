import React, { useState } from 'react';

// 위치 정보 및 에러 상태 타입 정의
interface LocationState {
    loaded: boolean;
    coordinates: {
        lat: string;
        lng: string;
    };
    error: string | null;
}

const GeoButton: React.FC = () => {
    const [location, setLocation] = useState<LocationState>({
        loaded: false,
        coordinates: { lat: '0', lng: '0' },
        error: null
    });

    const handleLocation = (position: GeolocationPosition) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: position.coords.latitude.toString(),
                lng: position.coords.longitude.toString()
            },
            error: null
        });
    };

    const handleError = (error: GeolocationPositionError) => {
        setLocation({
            loaded: true,
            coordinates: { lat: '0', lng: '0' },
            error: error.message
        });
    };

    const getLocation = () => {
        if (!navigator.geolocation) {
            handleError({
                message: "Geolocation is not supported by your browser" // TypeScript will show an error here as this object is not a GeolocationPositionError
            } as GeolocationPositionError);
        } else {
            navigator.geolocation.getCurrentPosition(handleLocation, handleError);
        }
    };

    return (
        <div>
            <button onClick={getLocation}>Get Location</button>
            <div>
                {location.loaded
                    ? location.error
                        ? <p>Error: {location.error}</p>
                        : <p>Latitude: {location.coordinates.lat}, Longitude: {location.coordinates.lng}</p>
                    : <p>Location data not loaded yet.</p>}
            </div>
        </div>
    );
};

export default GeoButton;
