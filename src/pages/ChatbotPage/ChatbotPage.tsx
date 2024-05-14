import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

// 컴포넌트 가져오기
import TitleBar from "../../components/TitleBar";
import { SecondaryButton } from "../../components/Button";

const ChatbotPage: React.FC = () => {
  const navigate = useNavigate();
  // 뒤로가기 버튼 클릭 이벤트
  const goToBack = (): void => {
    navigate("/");
  };



  return (
    <S.ChatbotContainer>
      <S.Header>
        <button onClick={goToBack}>back</button>
        <TitleBar title="Chatting"/>
      </S.Header>
      <SecondaryButton onClick={goToBack} disabled={false} children="도움말"/>
    </S.ChatbotContainer>
  );
};

export default ChatbotPage;
