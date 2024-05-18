import React, { useState } from "react";
import styled from "styled-components";

// 컴포넌트 가져오기
import { SecondaryButton } from "./common/Button";

const HelpButtonSectionWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  // border: 1px solid red;
  align-items: center;
  justify-content: flex-end;
  padding-right: 3em;
  margin: -20% 0 -20% 0;
`;

const HelpModalWrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 15%;
  left: 7%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 85vw;
  height: 70vh;
  background-color: rgba(0, 107, 179, 0.9);
  border-radius: 1em;
`;

const HelpModalBody = styled.div`
  width: 80%;
  height: 70%;
  background-color: white;
  border-radius: 0.5em;
  padding: 12px;
  overflow-y: scroll;
`;

const ModalCloseButton = styled.button`
  width: 10em;
  height: 3em;
  border-radius: 5px;
  border: 1px solid white;
  background-color: white;
  font-size: 1em;
`;

const ModalTitleText = styled.h1`
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  padding-top: 10px;
`;

const HelpModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [disable, setDisable] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
    setDisable(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setDisable(false);
  };

  return (
    <HelpButtonSectionWrapper>
      <SecondaryButton
        onClick={handleButtonClick}
        disabled={disable}
        children="도움말"
      />
      {isOpen && (
        <HelpModalWrapper>
          <ModalTitleText>도움말</ModalTitleText>
          <HelpModalBody>
            여러분이 사용하고 계신 Mearing에 대한 도움말입니다.
            <br />
            <br />
            1. 첫 화면에는 여러분이 대화 중 저장한 내용이 표시됩니다.
            <br />
            <br />
            2. 대화는 인공지능 AI와 이루어지며, 악의적으로 도용되지 않습니다.{" "}
            <br />
            <br />
            3. AI의 답변 오른쪽에 있는 버튼을 통해서 소리로 메세지를 들을 수
            있고, 저장할 수도 있습니다. <br />
            <br />
            4. 입력창 오른쪽에 있는 버튼을 누르면 여러분의 목소리를 인식하여
            글자로 바꾸어줍니다. <br />
            <br />
            5. 첫 화면에서 "시설 보기" 버튼을 누르면 주변 복지 시설의 정보를
            확인할 수 있습니다.
          </HelpModalBody>
          <ModalCloseButton onClick={handleCloseModal}>닫기</ModalCloseButton>
        </HelpModalWrapper>
      )}
    </HelpButtonSectionWrapper>
  );
};

export default HelpModal;
