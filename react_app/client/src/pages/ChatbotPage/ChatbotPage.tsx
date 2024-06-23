import React, { useState } from "react";
import * as S from "./style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// reacticons
import { SlArrowLeft } from "react-icons/sl";
import { FiMessageSquare } from "react-icons/fi";
import { RiSpeakFill } from "react-icons/ri";

// 컴포넌트 가져오기
import TitleBar from "../../components/common/TitleBar";
import TitleBarButton from "../../components/common/TitleBarButton";
import { SecondaryButton } from "../../components/common/Button";
import HelpModal from "../../components/HelpModal";
import ChatbotMsgBox from "../../components/ChatbotMsgBox";

interface ChatMessage {
  writer: "person" | "gpt";
  date: string;
  content: string;
  question?: string;
  answer?: string;
}

const ChatbotPage: React.FC = () => {
  const [chatMsg, setChatMsg] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const navigate = useNavigate();

  // 뒤로가기 버튼 클릭 이벤트
  const goToBack = (): void => {
    navigate("/main");
  };

  // input창 메시지 변경 이벤트
  const handleInputMsgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMsg = event.target.value;
    setChatMsg(newMsg);
    console.log("currentMessage:", newMsg);
  };

  // 전송 버튼 클릭 이벤트
  const sendButtonClicked = async () => {
    const questionMessage: ChatMessage = {
      writer: "person",
      date: new Date().toLocaleString(),
      content: chatMsg,
      question: chatMsg,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/chat", {
        question: chatMsg,
      });

      const answerMessage: ChatMessage = {
        writer: "gpt",
        date: new Date().toLocaleString(),
        content: response.data.answer,
        question: chatMsg,
        answer: response.data.answer,
      };

      setChatHistory((prevHistory) => [
        ...prevHistory,
        questionMessage,
        answerMessage,
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setChatMsg("");
  };

  // STT 버튼 클릭 이벤트
  const sttButtonClicked = async () => {
    const currentDate = new Date().toLocaleString();

    // 음성 인식 중 상태 업데이트
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { writer: "person", date: currentDate, content: "음성 인식 중..." },
    ]);

    try {
      const response = await axios.post("http://localhost:5000/api/stt_chat");

      const recognizedText = response.data.recognized_text;
      const answer = response.data.answer;

      // 음성 인식 결과와 GPT 응답 업데이트
      setChatHistory((prevHistory) => [
        ...prevHistory.slice(0, -1), // "음성 인식 중..." 메시지 제거
        {
          writer: "person",
          date: currentDate,
          content: recognizedText,
          question: recognizedText,
        },
        {
          writer: "gpt",
          date: currentDate,
          content: answer,
          question: recognizedText,
          answer: answer,
        },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
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
        {chatHistory.map((msg, index) => (
          <React.Fragment key={index}>
            <ChatbotMsgBox
              writer={msg.writer}
              date={msg.date}
              content={msg.content}
              question={msg.question}
              answer={msg.answer}
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
        <S.STTButton onClick={sttButtonClicked}>
          <RiSpeakFill size={"25px"} />
        </S.STTButton>
      </S.UsetActionContainer>
    </S.ChatbotContainer>
  );
};

export default ChatbotPage;
