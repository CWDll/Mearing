import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: space-around;
`;

export const SavedChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80%;
  height: 70%;
  border: 1px solid black;
  overflow-y: auto;
  padding-top: 1em;
  border-radius: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
`;

export const ContentWrapper = styled.div`
  padding: 10px;
`;
