import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

// 컴포넌트 가져오기
import TitleBar from "../../components/common/TitleBar";
import { PrimaryButton } from "../../components/common/Button";
import ContentBox from "../../components/ContentBox";

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const [savedChats, setSavedChats] = useState<DateData[]>([]);

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
    question: string;
    answer: string;
  }

  // /api/main_chat 호출하여 데이터 가져오기
  useEffect(() => {
    const fetchSavedChats = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/main_chat");
        setSavedChats(response.data);
      } catch (error) {
        console.error("Failed to fetch saved chats:", error);
      }
    };

    fetchSavedChats();
  }, []);

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
      {/* map 함수를 사용하여 저장된 채팅 내역을 표시 */}
      <S.SavedChatContainer>
        {savedChats.map((item, index) => (
          <ContentBox
            key={index}
            date={item.date}
            content={item.question}
            answer={item.answer}
          />
        ))}
      </S.SavedChatContainer>
      <S.ButtonContainer>
        <PrimaryButton
          onClick={goToChatbotPage}
          disabled={false}
          children="대화하기"
        />
        <PrimaryButton
          onClick={goToCenterPage}
          disabled={false}
          children="시설 보기"
        />
      </S.ButtonContainer>
    </S.MainContainer>
  );
};

export default MainPage;
