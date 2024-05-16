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
  height: 25em;
  border: 1px solid black;
  overflow-y: auto;
  padding-top: 1em;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid red;
  width: 80%;
`;
