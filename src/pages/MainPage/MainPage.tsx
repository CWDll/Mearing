import React from "react";
import * as S from "./style"

import TitleBar from "../../components/TitleBar";

const MainPage: React.FC = () => {
  return (
    <S.MainContainer>
      <TitleBar title="date"/>
      <S.SavedChatContainer></S.SavedChatContainer>
    </S.MainContainer>
      
  );
};

export default MainPage;
