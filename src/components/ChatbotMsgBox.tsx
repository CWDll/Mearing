import React from "react";
import styled, { css } from "styled-components";

// reacticons 사용
import { HiSpeakerWave } from "react-icons/hi2";
import { MdOutlineSaveAlt } from "react-icons/md";

// 메시지 박스 타입 정의
interface ChatbotMsgBox {
  writer: string;
  date: string;
  content: string;
}

// 속성 중 writer의 값 지정
interface ChatbotMsgBoxProps extends ChatbotMsgBox {
  writer: "person" | "gpt";
}

// 채팅 전송자에 따른 스타일 분리
const messageBoxStyle = css<{ writer: "person" | "gpt" }>`
  border: 1px solid
    ${({ writer }) => (writer === "person" ? "#4CAF50" : "#2196F3")};
  background-color: ${({ writer }) =>
    writer === "person" ? "#C8E6C9" : "#BBDEFB"};
  ${({ writer }) =>
    writer === "person" ? "margin-left: auto;" : "margin-right: auto;"}
`;

// 채팅 메세지의 공통 스타일
const ContentBoxWrapper = styled.div<{ writer: "person" | "gpt" | any }>`
  display: flex;
  flex-direction: column;
  ${messageBoxStyle}
  min-width: 70%;
  max-width: 100%;
  height: auto;
  padding: 0.5em;
  margin-bottom: 0.5em;
  border-radius: 0.5em;
  padding: auto;
`;

// 채팅 메세지 라인 컨테이너
const ContentLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  // height: 5em;
`;

const ContentUserActionButtonConateinr = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: auto;
  justify-content: space-around;
  margin-left: 1vw;
`;

const ChatbotMsgBox: React.FC<ChatbotMsgBoxProps> = (props) => {
  // SAVE 버튼 클릭 이벤트
  const saveButtonClicked = () => {
    alert("현재 메세지를 저장합니다.");
  };

  // TTS 버튼 클릭 이벤트
  const ttsButtonClicked = () => {
    alert("현재 메세지를 음성으로 변환합니다.");
  };

  return (
    <ContentLineContainer>
      <ContentBoxWrapper writer={props.writer}>
        <div>Writer: {props.writer}</div>
        <div>Date: {props.date}</div>
        <div>Content: {props.content}</div>
      </ContentBoxWrapper>
      {/* 채팅 전송자가 gpt일 때만 TTS, SAVE버튼을 렌더링한다. */}
      {props.writer === "gpt" && (
        <ContentUserActionButtonConateinr>
          {/* TTS 버튼 */}
          <button onClick={ttsButtonClicked}>
            <HiSpeakerWave size={"25px"} />
          </button>
          {/* SAVE 버튼 */}
          <button onClick={saveButtonClicked}>
            <MdOutlineSaveAlt size={"25px"} />
          </button>
        </ContentUserActionButtonConateinr>
      )}
    </ContentLineContainer>
  );
};

export default ChatbotMsgBox;
