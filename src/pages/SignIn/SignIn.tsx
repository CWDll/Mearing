import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as S from "./style";
import TitleBar from "../../components/common/TitleBar";

import { PrimaryButton, SecondaryButton } from "../../components/common/Button";

const SignIn: React.FunctionComponent = () => {
  const navigate = useNavigate();
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

  function handleSignUp() {
    navigate("/signup");
  }

  return (
    <S.SignInContainer>
      <TitleBar title="로그인" />
      <S.Form onSubmit={handleSubmit}>
        <S.FormGroup>
          <S.Label>Email:</S.Label>
          <S.Input type="email" value={email} onChange={handleEmailChange} />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label>Password:</S.Label>
          <S.Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </S.FormGroup>
        <S.ButtonContainer>
          <PrimaryButton
            onClick={handleSubmit}
            disabled={false}
            children="로그인하기"
            type="submit"
          />
          <SecondaryButton
            onClick={handleSignUp}
            disabled={false}
            children="회원가입"
          />
        </S.ButtonContainer>
      </S.Form>
    </S.SignInContainer>
  );
};

export default SignIn;
