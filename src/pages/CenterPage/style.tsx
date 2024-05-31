import styled from "styled-components";

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: space-around;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 3em;
  border: 1px solid black;
  padding-top: 10px;
`;

export const CenterBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 25em;
  border: 1px solid black;
  overflow-y: auto;
  padding-top: 10px;
`;
