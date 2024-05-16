import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

// 컴포넌트 가져오기
import TitleBar from "../../components/common/TitleBar";
import { SecondaryButton } from "../../components/common/Button";
import HelpModal from "../../components/HelpModal";

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
        <TitleBar title="Chatting" />
      </S.Header>
      <HelpModal />
      <S.ChatMsgContainer>
        {Array(10).fill(<div>message</div>)}
      </S.ChatMsgContainer>
      <S.UsetActionContainer>
        <S.MsgInput type="text" />
        <S.MsgSendButton>전송</S.MsgSendButton>
        <S.STTButton>STT버튼</S.STTButton>
      </S.UsetActionContainer>
    </S.ChatbotContainer>
  );
};

export default ChatbotPage;
