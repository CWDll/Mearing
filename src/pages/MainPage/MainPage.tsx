import React from "react";
import * as S from "./style"

import TitleBar from "../../components/TitleBar";
import Button from "../../components/Button";

const MainPage: React.FC = () => {
  const handleClick = (): void => {
    alert("Button clicked!");
  };

  // ...

  return (
    <S.MainContainer>
      <TitleBar title="date"/>
      {/* map 함수를 사용하여 더미데이터(저장한 채팅 내역)을 넣을 예정 */}
      <S.SavedChatContainer></S.SavedChatContainer>
      <S.ButtonContainer>
        <Button onClick={handleClick} disabled={false} children="chat"/>
        <Button onClick={handleClick} disabled={false} children="버튼입니다."/>
      </S.ButtonContainer>
    </S.MainContainer>
  );
};

export default MainPage;
