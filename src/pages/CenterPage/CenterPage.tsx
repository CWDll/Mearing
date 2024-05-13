import React from "react";
import * as S from "./style"
import { useNavigate } from "react-router-dom";

// 컴포넌트 가져오기
import TitleBar from "../../components/TitleBar";

const CenterPage: React.FC = () => {
  const navigate = useNavigate();
// 뒤로가기 버튼 클릭 이벤트
  const goToBack = (): void => {
    navigate("/");
  };

  return (
    <S.CenterContainer>
      <S.Header>
        <div>back</div>
        <TitleBar title="도움 시설"/>
      </S.Header>
    </S.CenterContainer>
  );
};

export default CenterPage;
