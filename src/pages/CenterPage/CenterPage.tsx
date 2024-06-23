import React, { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

// reacticons
import { SlArrowLeft } from "react-icons/sl";
import { FaBuildingCircleCheck } from "react-icons/fa6";

// 컴포넌트 가져오기
import TitleBar from "../../components/common/TitleBar";
import ContentBox from "../../components/ContentBox";
import GeoButton from "../../components/geolocation/GeoButton";
import TitleBarButton from "../../components/common/TitleBarButton";

interface ContactData {
  '수행기관명': string;
  '주소': string;
  '기관 대표전화': string;
}

const CenterPage: React.FC = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<ContactData[]>([]);

  // 뒤로가기 버튼 클릭 이벤트
  const goToBack = (): void => {
    navigate("/");
  };

  return (
    <S.CenterContainer>
      <S.Header>
        <TitleBarButton onClick={goToBack} />
        <FaBuildingCircleCheck size={"35px"} />
        <TitleBar title="도움 시설" />
      </S.Header>
      <GeoButton setContacts={setContacts} />
      <S.CenterBodyContainer>
        {contacts.map((item, index) => (
          <ContentBox
            key={index}
            name={item['수행기관명']}
            url={item['주소']}
            phoneNumber={item['기관 대표전화']}
          />
        ))}
      </S.CenterBodyContainer>
    </S.CenterContainer>
  );
};

export default CenterPage;
