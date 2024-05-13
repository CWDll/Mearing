import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    background-color: #f0f0f0;
`;

const TitleText = styled.h1`
    font-size: 24px;
    color: #333;
`;

const TitleBar: React.FC<{ title: string }> = ({ title }) => {
    return (
        <TitleContainer>
            <TitleText>{title}</TitleText>
        </TitleContainer>
    );
};

export default TitleBar;