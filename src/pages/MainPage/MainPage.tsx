import React from "react";
import * as S from "./style"
import { useNavigate } from "react-router-dom";

// 컴포넌트 가져오기
import TitleBar from "../../components/TitleBar";
import Button from "../../components/Button";
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
    const dateString = date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
    const dayOfWeek = date.getDay();
    const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    return `${dateString} ${dayNames[dayOfWeek]}`; // 날짜와 요일을 함께 반환
  };
  // 날짜 정보를 가져옴
  const dateInfo = getDateString();

  interface DateData {
    type: 'date';
    date: string;
    content: string;
}
interface ContactData {
    type: 'contact';
    name: string;
    url: string;
    phoneNumber: string;
}

type DummyDataType = DateData | ContactData;

  // 더미 데이터 생성
  const dummyData = [
    { type: 'date', date: "2024-05-13", content: "오늘의 할 일" },
    { type: 'contact', name: "홍길동", url: "https://www.example.com", phoneNumber: "010-1234-5678" },
    { type: 'date', date: "2024-05-14", content: "내일의 할 일" },
    { type: 'contact', name: "이순신", url: "https://www.anotherexample.com", phoneNumber: "010-8765-4321" },
    { type: 'date', date: "2024-05-15", content: "프로젝트 마감일" },
    { type: 'contact', name: "장보고", url: "https://www.history.com", phoneNumber: "010-9876-5432" },
    { type: 'date', date: "2024-05-16", content: "진행할 미팅 준비" },
    { type: 'contact', name: "유성룡", url: "https://www.science.org", phoneNumber: "010-5678-1234" },
    { type: 'date', date: "2024-05-17", content: "친구와 약속" },
    { type: 'contact', name: "김유신", url: "https://www.military.kr", phoneNumber: "010-4321-8765" },
    { type: 'date', date: "2024-05-18", content: "가족 행사 참석" },
    { type: 'contact', name: "강감찬", url: "https://www.leadership.com", phoneNumber: "010-5678-9101" },
    { type: 'date', date: "2024-05-19", content: "책 읽기" },
    { type: 'contact', name: "조조", url: "https://www.strategist.cn", phoneNumber: "010-2345-6789" },
    { type: 'date', date: "2024-05-20", content: "신규 프로젝트 미팅" },
    { type: 'contact', name: "제갈량", url: "https://www.wisdom.net", phoneNumber: "010-8765-4321" }
];
  const goToCenterPage = (): void => {
    navigate("/center");
  }


  return (
    <S.MainContainer>
      <TitleBar title="date" date={dateInfo}/>
      {/* map 함수를 사용하여 더미데이터(저장한 채팅 내역)을 넣을 예정 */}
      <S.SavedChatContainer>
      {dummyData.map((item, index) =>
                    item.type === 'date' ? (
                        <ContentBox key={index} date={item.date!} content={item.content!} />
                    ) : (
                        <ContentBox key={index} name={item.name!} url={item.url!} phoneNumber={item.phoneNumber!} />
                    )
                )}
      </S.SavedChatContainer>
      <S.ButtonContainer>
        <Button onClick={handleClick} disabled={false} children="Chat"/>
        <Button onClick={goToCenterPage} disabled={false} children="Center"/>
      </S.ButtonContainer>
    </S.MainContainer>
  );
};

export default MainPage;
