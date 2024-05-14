import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const ChatbotPage: React.FC = () => {
  const navigate = useNavigate();
  // 뒤로가기 버튼 클릭 이벤트
  const goToBack = (): void => {
    navigate("/");
  };



  return (
    <S.ChatbotContainer>
      <button onClick={goToBack}>goToMainPage</button>
      Chatbot page
    </S.ChatbotContainer>
  );
};

export default ChatbotPage;
