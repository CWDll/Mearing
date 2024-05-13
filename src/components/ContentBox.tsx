import React from 'react';
import styled, { css } from 'styled-components';

interface DateContentProps {
    date: string;
    content: string;
}

interface ContactInfoProps {
    name: string;
    url: string;
    phoneNumber: string;
}

type ContentBoxProps = DateContentProps | ContactInfoProps;

// 스타일을 조건부로 적용하는 함수
const contentBoxStyle = css<{ type: 'date' | 'contact' }>`
    padding: 20px;
    margin-bottom: 10px;
    border: 1px solid ${({ type }) => (type === 'date' ? '#4CAF50' : '#2196F3')};
    background-color: ${({ type }) => (type === 'date' ? '#C8E6C9' : '#BBDEFB')};
`;

const ContentBoxWrapper = styled.div<{ type: 'date' | 'contact' }>`
    ${contentBoxStyle}
`;

const isDateContentProps = (props: any): props is DateContentProps => {
    return props.date !== undefined && props.content !== undefined;
};

const isContactInfoProps = (props: any): props is ContactInfoProps => {
    return props.name !== undefined && props.url !== undefined && props.phoneNumber !== undefined;
};

const ContentBox: React.FC<ContentBoxProps> = (props) => {
    return (
        <ContentBoxWrapper type={isDateContentProps(props) ? 'date' : 'contact'}>
            {isDateContentProps(props) && (
                <>
                    <div>Date: {props.date}</div>
                    <div>Content: {props.content}</div>
                </>
            )}

            {isContactInfoProps(props) && (
                <>
                    <div>Name: {props.name}</div>
                    <div>URL: {props.url}</div>
                    <div>Phone Number: {props.phoneNumber}</div>
                </>
            )}
        </ContentBoxWrapper>
    );
};

export default ContentBox;
