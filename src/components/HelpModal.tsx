import React, { useState } from "react";
import styled from "styled-components";

// 컴포넌트 가져오기
import { SecondaryButton } from "./Button";

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
  border: 1px solid black;
  background-color: rgba(0, 107, 179, 0.9);
  border-radius: 1em;
`;

const HelpModalBody = styled.div`
  width: 80%;
  height: 70%;
  background-color: white;
  border-radius: 0.5em;
  padding: 12px;
`;

const ModalCloseButton = styled.button`
  width: 10em;
  height: 3em;
  border-radius: 5px;
  border: 1px solid white;
  background-color: white;
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
    <div>
      <SecondaryButton
        onClick={handleButtonClick}
        disabled={disable}
        children="도움말"
      />
      {isOpen && (
        <HelpModalWrapper>
          <ModalTitleText>도움말</ModalTitleText>
          <HelpModalBody>Body Text</HelpModalBody>
          <ModalCloseButton onClick={handleCloseModal}>닫기</ModalCloseButton>
        </HelpModalWrapper>
      )}
    </div>
  );
};

export default HelpModal;
