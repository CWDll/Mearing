import React from "react";
import styled, { css } from "styled-components";

interface ChatbotMsgBox {
  writer: string;
  date: string;
  content: string;
}
interface ChatbotMsgBoxProps extends ChatbotMsgBox {
  writer: "person" | "gpt";
}

// 스타일을 조건부로 적용하는 함수
const messageBoxStyle = css<{ writer: "person" | "gpt" }>`
  border: 1px solid
    ${({ writer }) => (writer === "person" ? "#4CAF50" : "#2196F3")};
  background-color: ${({ writer }) =>
    writer === "person" ? "#C8E6C9" : "#BBDEFB"};
`;

const ContentBoxWrapper = styled.div<{ writer: "person" | "gpt" | any }>`
  ${messageBoxStyle}
  width: 80%;
  height: 100%;
  padding: 20px;
  margin-bottom: 10px;
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
