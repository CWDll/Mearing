import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/signin", {
        email,
        password,
      });
      console.log(response.data);
      if (response.status === 200) {
        localStorage.setItem("userEmail", email); // 이메일을 로컬 스토리지에 저장
        navigate("/main");
      }
    } catch (error) {
      console.error("There was an error signing in!", error);
      alert("이메일과 비밀번호를 확인해주세요.");
    }
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
