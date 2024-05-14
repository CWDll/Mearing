import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

// 컴포넌트 가져오기
import TitleBar from "../../components/TitleBar";
import ContentBox from "../../components/ContentBox";
import GeoButton from "../../components/GeoButton";

const CenterPage: React.FC = () => {
  const navigate = useNavigate();
  // 뒤로가기 버튼 클릭 이벤트
  const goToBack = (): void => {
    navigate("/");
  };

  // 더미데이터 사용하기
  interface ContactData {
    type: "contact";
    name: string;
    url: string;
    phoneNumber: string;
  }

  // Contact 타입 더미 데이터만 생성
  const dummyData: ContactData[] = [
    {
      type: "contact",
      name: "홍길동",
      url: "https://www.example.com",
      phoneNumber: "010-1234-5678",
    },
    {
      type: "contact",
      name: "이순신",
      url: "https://www.anotherexample.com",
      phoneNumber: "010-8765-4321",
    },
    {
      type: "contact",
      name: "장보고",
      url: "https://www.history.com",
      phoneNumber: "010-9876-5432",
    },
    {
      type: "contact",
      name: "유성룡",
      url: "https://www.science.org",
      phoneNumber: "010-5678-1234",
    },
    {
      type: "contact",
      name: "김유신",
      url: "https://www.military.kr",
      phoneNumber: "010-4321-8765",
    },
    {
      type: "contact",
      name: "강감찬",
      url: "https://www.leadership.com",
      phoneNumber: "010-5678-9101",
    },
    {
      type: "contact",
      name: "조조",
      url: "https://www.strategist.cn",
      phoneNumber: "010-2345-6789",
    },
    {
      type: "contact",
      name: "제갈량",
      url: "https://www.wisdom.net",
      phoneNumber: "010-8765-4321",
    },
  ];

  return (
    <S.CenterContainer>
      <S.Header>
        <button onClick={goToBack}>back</button>
        <TitleBar title="도움 시설" />
      </S.Header>
      {/* <TitleBar title="위치 정보"/> */}
      <GeoButton />
      <S.CenterBodyContainer>
        {dummyData.map((item, index) => (
          <ContentBox
            key={index}
            name={item.name}
            url={item.url}
            phoneNumber={item.phoneNumber}
          />
        ))}
        <a href="tel:010-4640-4656">전화 걸기</a>
      </S.CenterBodyContainer>
    </S.CenterContainer>
  );
};

export default CenterPage;
