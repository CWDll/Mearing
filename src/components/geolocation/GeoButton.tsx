import React, { useState } from "react";
import axios from "axios";
import * as S from "./style";

interface LocationState {
  loaded: boolean;
  coordinates: {
    lat: string;
    lng: string;
  };
  error: string | null;
  address: string | null;
}

const GeoButton: React.FC = () => {
  const [location, setLocation] = useState<LocationState>({
    loaded: false,
    coordinates: { lat: "0", lng: "0" },
    error: null,
    address: null,
  });

  const handleLocation = (position: GeolocationPosition) => {
    const lat = position.coords.latitude.toString();
    const lng = position.coords.longitude.toString();
    setLocation({
      loaded: true,
      coordinates: { lat, lng },
      error: null,
      address: null,
    });
    // 카카오 역지오코딩 API 호출
    reverseGeocode(lat, lng);
  };

  const handleError = (error: GeolocationPositionError) => {
    setLocation({
      loaded: true,
      coordinates: { lat: "0", lng: "0" },
      error: error.message,
      address: null,
    });
  };

  // 역지오코딩 함수(카카오 API 호출)
  const reverseGeocode = async (lat: string, lng: string) => {
    const apiKey = process.env.REACT_APP_KAKAO_API_KEY; // 환경 변수 사용
    const url = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}&input_coord=WGS84`;
    try {
      const response = await axios.get(url, {
        headers: { Authorization: `KakaoAK ${apiKey}` },
      });
      const address = response.data.documents[0].address.address_name;
      setLocation((prevState) => ({ ...prevState, address }));
    } catch (error) {
      console.error("Error fetching address:", error);
      setLocation((prevState) => ({
        ...prevState,
        error: "Failed to fetch address",
      }));
    }
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      handleError({
        message: "Geolocation is not supported by your browser",
      } as GeolocationPositionError);
    } else {
      navigator.geolocation.getCurrentPosition(handleLocation, handleError);
    }
  };

  return (
    <S.GeoLocationContainer>
      <button onClick={getLocation}>Get Location</button>
      <div>
        {location.loaded ? (
          location.error ? (
            <p>Error: {location.error}</p>
          ) : (
            <>
              <p>
                Latitude: {location.coordinates.lat}, Longitude:{" "}
                {location.coordinates.lng}
              </p>
              <p>Address: {location.address || "Address not loaded"}</p>
            </>
          )
        ) : (
          <p>[Loading...]Location data not loaded yet.</p>
        )}
      </div>
    </S.GeoLocationContainer>
  );
};

export default GeoButton;
