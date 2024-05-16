import React from "react";
import styled, { css } from "styled-components";

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
  width: 50%;
  height: 100%;
  padding: 20px;
  margin-bottom: 0.5em;
  border-radius: 0.5em;
  padding: auto;
`;

const ChatbotMsgBox: React.FC<ChatbotMsgBoxProps> = (props) => {
  return (
    <ContentBoxWrapper writer={props.writer}>
      <div>Writer: {props.writer}</div>
      <div>Date: {props.date}</div>
      <div>Content: {props.content}</div>
    </ContentBoxWrapper>
  );
};

export default ChatbotMsgBox;
