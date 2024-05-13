import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    width: 10em;
    height: 4em;
    border-radius: 5px;
    border: 1px solid black;
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
const PrimaryButton = styled(Button)`
    /* Primary 버튼 스타일을 여기에 작성하세요 */
`;

const SecondaryButton = styled(Button)`
    /* Secondary 버튼 스타일을 여기에 작성하세요 */
`;

export { PrimaryButton, SecondaryButton };