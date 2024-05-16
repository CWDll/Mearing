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
    <div>
      <SecondaryButton
        onClick={handleButtonClick}
        disabled={disable}
        children="도움말"
      />
      {isOpen && (
        <HelpModalWrapper>
          <ModalTitleText>도움말</ModalTitleText>
          <HelpModalBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            lorem ac lectus consequat tincidunt. Curabitur luctus turpis sed
            tortor convallis, eget placerat sapien rutrum. Integer quis libero
            eget nisi congue finibus at vitae velit. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Fusce et nisi sed libero fermentum finibus sed et odio. Sed
            efficitur odio vel nulla tincidunt, vitae posuere lorem gravida.
            Nulla facilisi. Nulla facilisi. Phasellus nec felis vitae lorem
            blandit varius. In hac habitasse platea dictumst. Vivamus semper
            risus vitae justo congue, ut tempor neque dapibus. Sed ut felis ut
            dui accumsan bibendum. Morbi vel tellus justo. Cras lobortis
            vehicula nisi, non pharetra nulla viverra eget. Proin euismod, orci
            eget feugiat blandit, lorem lacus elementum quam, vel sagittis eros
            enim nec ex. Quisque id quam pretium, venenatis est ac, tristique
            nibh. Nunc nec congue quam, vel commodo purus. Vivamus at nisl vel
            libero viverra interdum. Duis ut elit vehicula, eleifend dolor id,
            fermentum lectus. In ultrices lorem vel tortor placerat, sit amet
            consequat velit varius. Phasellus feugiat, magna nec faucibus
            commodo, felis enim lacinia lorem, ut vehicula justo lectus vitae
            elit. Nunc id orci sit amet justo bibendum facilisis. Integer eget
            mauris et velit convallis ultrices. Sed pharetra, nunc non rhoncus
            convallis, nisl elit pulvinar libero, sed dignissim mauris leo nec
            libero. Nulla facilisi. Phasellus non felis non magna fermentum
            dictum.
          </HelpModalBody>
          <ModalCloseButton onClick={handleCloseModal}>닫기</ModalCloseButton>
        </HelpModalWrapper>
      )}
    </div>
  );
};

export default HelpModal;
