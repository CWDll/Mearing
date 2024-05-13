import React from 'react';
import styled from 'styled-components';

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

const ContentBoxWrapper = styled.div`
    padding: 20px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    background-color: #f8f8f8;
`;

const isDateContentProps = (props: any): props is DateContentProps => {
    return props.date !== undefined && props.content !== undefined;
};

const isContactInfoProps = (props: any): props is ContactInfoProps => {
    return props.name !== undefined && props.url !== undefined && props.phoneNumber !== undefined;
};

const ContentBox: React.FC<ContentBoxProps> = (props) => {
    return (
        <ContentBoxWrapper>
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
