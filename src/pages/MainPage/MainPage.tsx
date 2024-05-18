import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

// 컴포넌트 가져오기
import TitleBar from "../../components/common/TitleBar";
import { PrimaryButton } from "../../components/common/Button";
import ContentBox from "../../components/ContentBox";

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  // 버튼 클릭 이벤트
  const handleClick = (): void => {
    alert("Button clicked!");
  };

  // 날짜 정보를 문자열로 반환하는 함수
  const getDateString = (): string => {
    const date = new Date();
    const dateString = date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const dayOfWeek = date.getDay();
    const dayNames = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];
    return `${dateString} ${dayNames[dayOfWeek]}`; // 날짜와 요일을 함께 반환
  };
  // 날짜 정보를 가져옴
  const dateInfo = getDateString();

  // 날짜 데이터 인터페이스
  interface DateData {
    type: "date";
    date: string;
    content: string;
  }

  // 날짜 타입 더미 데이터만 생성
  const dummyData: DateData[] = [
    { type: "date", date: "2024-05-13", content: "오늘의 할 일" },
    { type: "date", date: "2024-05-14", content: "내일의 할 일" },
    { type: "date", date: "2024-05-15", content: "프로젝트 마감일" },
    { type: "date", date: "2024-05-16", content: "진행할 미팅 준비" },
    { type: "date", date: "2024-05-17", content: "친구와 약속" },
    { type: "date", date: "2024-05-18", content: "가족 행사 참석" },
    { type: "date", date: "2024-05-19", content: "책 읽기" },
    { type: "date", date: "2024-05-20", content: "신규 프로젝트 미팅" },
  ];

  // chatbot버튼 클릭 이벤트
  const goToChatbotPage = (): void => {
    navigate("/chatbot");
  };

  // center버튼 클릭 이벤트
  const goToCenterPage = (): void => {
    navigate("/center");
  };

  return (
    <S.MainContainer>
      <TitleBar title="Mearing" date={dateInfo} />
      <p>저장된 이야기 목록입니다.</p>
      <p>대화를 시작하려면 "대화하기"를,</p>
      <p>주변 복지 시설의 정보를 원하시면</p>
      <p>"시설 보기"버튼을 눌러주세요.</p>
      {/* map 함수를 사용하여 더미데이터(저장한 채팅 내역)을 넣을 예정 */}
      <S.SavedChatContainer>
        {dummyData.map((item, index) => (
          <ContentBox key={index} date={item.date} content={item.content} />
        ))}
      </S.SavedChatContainer>
      <S.ButtonContainer>
        <PrimaryButton
          onClick={goToChatbotPage}
          disabled={false}
          children="Chat"
        />
        <PrimaryButton
          onClick={goToCenterPage}
          disabled={false}
          children="Center"
        />
      </S.ButtonContainer>
    </S.MainContainer>
  );
};

export default MainPage;
