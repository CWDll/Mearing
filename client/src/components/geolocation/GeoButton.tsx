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

interface ContactData {
  수행기관명: string;
  주소: string;
  "기관 대표전화": string;
}

interface GeoButtonProps {
  setContacts: (contacts: ContactData[]) => void;
}

const GeoButton: React.FC<GeoButtonProps> = ({ setContacts }) => {
  const [location, setLocation] = useState<LocationState>({
    loaded: false,
    coordinates: { lat: "0", lng: "0" },
    error: null,
    address: null,
  });

  const handleLocation = async (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    const lat = latitude.toString();
    const lng = longitude.toString();
    setLocation({
      loaded: true,
      coordinates: { lat, lng },
      error: null,
      address: null,
    });
    // 카카오 역지오코딩 API 호출
    const apiKey = process.env.REACT_APP_KAKAO_API_KEY;
    const url = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}&input_coord=WGS84`;

    try {
      const response = await axios.get(url, {
        headers: { Authorization: `KakaoAK ${apiKey}` },
      });
      const address = response.data.documents[0].address.address_name;
      const [city, district] = address.split(" ");
      console.log("city와 district정보:", city, district);

      setLocation((prevState) => ({
        ...prevState,
        address: `${city} ${district}`,
      }));

      // Flask API 호출
      const contactData = await axios.get(
        `http://localhost:5000/api/contacts?city=${city}&district=${district}`
      );
      setContacts(contactData.data);
    } catch (error) {
      console.error("Error fetching address or contacts:", error);
      setLocation((prevState) => ({
        ...prevState,
        error: "Failed to fetch data",
      }));
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleLocation, (error) => {
        setLocation({
          loaded: true,
          coordinates: { lat: "0", lng: "0" },
          error: error.message,
          address: null,
        });
      });
    } else {
      setLocation({
        loaded: true,
        coordinates: { lat: "0", lng: "0" },
        error: "Geolocation is not supported by your browser",
        address: null,
      });
    }
  };

  return (
    <S.GeoLocationContainer>
      <S.GeoButton onClick={getLocation}>위치 정보 가져오기</S.GeoButton>
      <div>
        {location.loaded ? (
          location.error ? (
            <p>문제 발생: {location.error}</p>
          ) : (
            <>
              <p>
                위도: {location.coordinates.lat}, 경도:{" "}
                {location.coordinates.lng}
              </p>
              <p>
                현재 위치:{" "}
                {location.address || "위치 정보를 확인할 수 없습니다."}
              </p>
            </>
          )
        ) : (
          <>
            <p>위 버튼을 눌러 위치 정보를 불러와 주세요.</p>
            <p>위치에 맞는 관련 시설 명단을 보여드릴게요 !</p>
          </>
        )}
      </div>
    </S.GeoLocationContainer>
  );
};

export default GeoButton;
