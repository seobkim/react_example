
import React, { useState } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";


const Container = styled.div`
  width: 300px;
  margin : 0 auto;
  margin-top: 50px;
  padding: 20px;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;
`;
//아디 비번 값 받기
//값없으면 disabled
function LoginForm(props){

    
    const navigate = useNavigate();

    const submitEvent = e =>{
        e.preventDefault();
        
        let username = document.getElementById("userName");
        let password = document.getElementById("password");
  
        fetch("http://127.0.0.1:8080/login",{
            method : "POST",
            headers: {
                // 'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            
              },
              credentials: "include",
              body: new URLSearchParams({
                username: username.value,
                password: password.value
            })
        })
        .then((result) => result.json())
        .then((data) => {
            if(data.test == "성공"){
                console.log(data.userInfo)
                props.loginInfo(true,data.userInfo);
                navigate("/");

            }else{
                alert("실패");
            }
        })
    }

  return (
    <Container>
      <Input id="userName" name="id" placeholder="아이디를 입력해주세요" />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
      />
      <Button onClick={submitEvent}>로그인</Button>
    </Container>
  );
}

export default LoginForm;