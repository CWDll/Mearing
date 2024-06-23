import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./style";
import TitleBar from "../../components/common/TitleBar";
import { PrimaryButton } from "../../components/common/Button";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        email,
        password,
      });
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error("There was an error signing up!", error);
    }
  };

  function handleSignIn() {
    navigate("/");
  }

  return (
    <S.SignUpContainer>
      <TitleBar title="회원가입" />
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
        <S.SubmitButton type="submit">회원가입 하기</S.SubmitButton>
      </S.Form>
      <br />
      <PrimaryButton
        onClick={handleSignIn}
        disabled={false}
        children="뒤로가기"
      />
    </S.SignUpContainer>
  );
};

export default SignUp;
