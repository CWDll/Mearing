import React from "react";
import styled from "styled-components";
import { SlArrowLeft } from "react-icons/sl";

type TitleBarButtonProps = {
  onClick: () => void;
};

const BarButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;
`;

const TitleBarButton: React.FC<TitleBarButtonProps> = ({ onClick }) => {
  return (
    <BarButton onClick={onClick}>
      <SlArrowLeft />
    </BarButton>
  );
};

export default TitleBarButton;
