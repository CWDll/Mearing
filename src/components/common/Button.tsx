import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  width: 10em;
  height: 4em;
  border-radius: 5px;
  border: 1px solid black;
  background-color: green;
`;

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <ButtonWrapper onClick={onClick} disabled={disabled}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;

// 버튼 스타일링
const PrimaryButton = styled(ButtonWrapper)`
  /* Primary 버튼 스타일을 여기에 작성하세요 */
`;

const SecondaryButton = styled(ButtonWrapper)`
  background-color: #ffffff;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 0.5rem;
  color: #111827;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: 0.75rem 1rem;
  text-align: center;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;

  &:hover {
    background-color: #f9fafb;
  }

  &:focus {
    outline: 2px solid rgba(0, 0, 0, 0.1);
    outline-offset: 2px;
  }

  &:focus-visible {
    box-shadow: none;
  }
`;

export { PrimaryButton, SecondaryButton };
