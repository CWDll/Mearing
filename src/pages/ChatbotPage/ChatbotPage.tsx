import React, { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

// reacticons
import { SlArrowLeft } from "react-icons/sl";
import { FiMessageSquare } from "react-icons/fi";

// 컴포넌트 가져오기
import TitleBar from "../../components/common/TitleBar";
import TitleBarButton from "../../components/common/TitleBarButton";
import { SecondaryButton } from "../../components/common/Button";
import HelpModal from "../../components/HelpModal";
import ChatbotMsgBox from "../../components/ChatbotMsgBox";

const ChatbotPage: React.FC = () => {
  const [chatMsg, setChatMsg] = useState<string>("");
  const navigate = useNavigate();

  // 뒤로가기 버튼 클릭 이벤트
  const goToBack = (): void => {
    navigate("/");
  };

  const handleInputMsgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMsg = event.target.value;
    setChatMsg(newMsg);
    console.log("currentMessage:", newMsg);
  };

  const sendButtonClicked = () => {
    alert("현재까지 입력된 메세지입니다:" + chatMsg);
  };

  return (
    <S.ChatbotContainer>
      <S.Header>
        <TitleBarButton onClick={goToBack} />
        <FiMessageSquare size={"35px"} />
        <TitleBar title="이야기 하기" />
      </S.Header>
      <HelpModal />
      <S.ChatMsgContainer>
        {Array.from({ length: 5 }).map((_, index) => (
          <React.Fragment key={index}>
            <ChatbotMsgBox
              writer="person"
              date="2021-09-01"
              content="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            />
            <ChatbotMsgBox
              writer="gpt"
              date="2021-09-01"
              content="반갑습니다반갑습니다반갑습니다반갑습니다반갑습니다반갑습니다반갑습니다반갑습니다반갑습니다반갑습니다반갑습니다반갑습니다"
            />
            <hr />
          </React.Fragment>
        ))}
      </S.ChatMsgContainer>
      <S.UsetActionContainer>
        <S.MsgInput
          type="text"
          placeholder="여기 입력해주세요"
          required
          value={chatMsg}
          onChange={handleInputMsgChange}
        />
        <S.MsgSendButton onClick={sendButtonClicked}>전송</S.MsgSendButton>
        <S.STTButton>STT버튼</S.STTButton>
      </S.UsetActionContainer>
    </S.ChatbotContainer>
  );
};

export default ChatbotPage;
