import React from "react";
import * as S from "./style"

// 컴포넌트 가져오기
import TitleBar from "../../components/TitleBar";
import Button from "../../components/Button";
import ContentBox from "../../components/ContentBox";

const MainPage: React.FC = () => {
  
  // 버튼 클릭 이벤트
  const handleClick = (): void => {
    alert("Button clicked!");
  };

  // 날짜 정보를 문자열로 반환하는 함수
  const getDateString = (): string => {
    const date = new Date();
    const dateString = date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
    const dayOfWeek = date.getDay();
    const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    return `${dateString} ${dayNames[dayOfWeek]}`; // 날짜와 요일을 함께 반환
  };
  // 날짜 정보를 가져옴
  const dateInfo = getDateString();

  return (
    <S.MainContainer>
      <TitleBar title="date" date={dateInfo}/>
      {/* map 함수를 사용하여 더미데이터(저장한 채팅 내역)을 넣을 예정 */}
      <S.SavedChatContainer>
        <ContentBox date="2021-09-01" content="안녕하세요!"/>
        <ContentBox name="홍길동" url="https://www.naver.com" phoneNumber="010-1234-5678"/>
      </S.SavedChatContainer>
      <S.ButtonContainer>
        <Button onClick={handleClick} disabled={false} children="Chat"/>
        <Button onClick={handleClick} disabled={false} children="Center"/>
      </S.ButtonContainer>
    </S.MainContainer>
  );
};

export default MainPage;
