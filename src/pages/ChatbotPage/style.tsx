import styled from "styled-components";

export const ChatbotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: space-around;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 5em;
  border: 1px solid black;
`;

export const ChatMsgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 25em;
  border: 1px solid black;
`;

export const UsetActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 3em;
  border: 1px solid red;
`;

export const MsgInput = styled.input`
  flex: 4;
`;

export const MsgSendButton = styled.button`
  flex: 1;
  margin-right: 1em;
`;

export const STTButton = styled.button`
  flex: 2;
`;
