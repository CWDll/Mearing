import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  background-color: #f0f0f0;
`;

const TitleText = styled.h1`
  font-size: 24px;
  color: #333;
`;

const DateText = styled.span`
  font-size: 16px;
  color: #666;
  padding-left: 10px;
`;

// 타이틀과 선택적 날짜를 받는 컴포넌트 정의
const TitleBar: React.FC<{ title: string; date?: string }> = ({
  title,
  date,
}) => {
  return (
    <TitleContainer>
      <TitleText>
        {title}
        {date && <DateText>{date}</DateText>}
      </TitleText>
    </TitleContainer>
  );
};

export default TitleBar;
