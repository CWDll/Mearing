import React, { useState } from "react";
import styled from "styled-components";
import * as S from "./style";
import TitleBar from "../../components/common/TitleBar";

import { PrimaryButton } from "../../components/common/Button";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  border: 1px dotted black;
  background-color: #f0f0f0;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const SignIn: React.FunctionComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 핸들러 추가
    console.log("Email:", email);
    console.log("Password:", password);
    alert("로그인 정보:" + email + password);
  };

  return (
    <SignInContainer>
      <TitleBar title="로그인" />
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Email:</Label>
          <Input type="email" value={email} onChange={handleEmailChange} />
        </FormGroup>
        <FormGroup>
          <Label>Password:</Label>
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </FormGroup>
        <PrimaryButton
          onClick={handleSubmit}
          disabled={false}
          children="로그인하기"
          type="submit"
        />
      </Form>
    </SignInContainer>
  );
};

export default SignIn;
