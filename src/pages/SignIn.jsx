import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DeviceSize } from '../components/Responsive';


const Container = styled.section`
width: 100vw;
margin: 0 auto;
max-width: 488px;
@media ${DeviceSize.mobile}{
    width:90vw;
    margin-top: 30px;
}
`;

const Tittle = styled.h1``;

const Form = styled.form`
display: flex;
flex-direction: column;
width: 100%;
border-bottom: 1px solid #e5e5e5;
position: relative;
margin-bottom: 30px;
padding-bottom: 62px;
&:before{
    content: 'or';
    background-color: #fff;
    width: 40px;
    height: 30px;
    position: absolute;
    bottom: -14px;
    left: 50%;
    right: 50%;
    transform: translate(-50%, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #b5a7a7;
    font-size: 18px;
}
@media ${DeviceSize.mobile}{
    padding-bottom: 62px;
    margin-top: 30px;
}
`;

const Label = styled.label`
display: flex;
flex-direction: column;
width: 98%;
margin: 14px 10px 4px;
color: #0d0c22;
font-weight: 600;
letter-spacing: 1px;
@media ${DeviceSize.mobile}{
    margin: 10px 0;
}
`;

const Input = styled.input`
border: 1px solid transparent;
transition: background-color 200ms ease, outline 200ms ease, color 200ms ease, box-shadow 200ms ease, -webkit-box-shadow 200ms ease;
border-radius: 6px;
outline: none;
background-color: #f3f3f4;
color: #0d0c22;
appearance: none;
line-height: 28px;
height: 40px;
padding: 10px 16px;
margin-top: 7px;
font-size: 16px;
    letter-spacing: 1px;
&:hover{
    border-color: rgba(234,76,137,0.4);
    background-color: #fff;
    -webkit-box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
}
&:focus{
    border-color: rgba(234,76,137,0.4);
    background-color: #fff;
    -webkit-box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
}
`;

const HeroButton = styled.button`

font-size: 18px;
  align-items: center;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  margin-left: 11px;
  margin-top: 30px;

&:active{
  outline: 0;
}
&:hover {
  outline: 0;
}

span {
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

&:hover span {
  background: none;
}

@media ${DeviceSize.mobile} {  
  margin: 0 auto;
    width: 100%;
    font-size: 18px;  
}
`;

const Member = styled.div`
text-align: center;
`;


const SignIn = () => {

    const data = {username:'', password:'' };
    const [inputData, setInputData] = useState(data);
    const [flag, setFlag] = useState(false);

    const onChangeHandel = (e) =>{
        setInputData({...inputData, [e.target.name]:e.target.value});
    }

    const onSubmitHandle = (e) =>{
        e.preventDefault();
        setFlag(true)
    }


    return (
        <Container>
            <div>{(flag)? <h2>username:{inputData.username}</h2>:''}</div>
            <Tittle>Sign in to Lama</Tittle>
            <Form onSubmit={onSubmitHandle}>
                    <Label> Username or Email Address
                        <Input type="text" name="username" autoComplete='off' required value={inputData.username} onChange={onChangeHandel}/>
                    </Label>
                <Label> Password 
                    <Input type="password" name="password"  autoComplete='off' required value={inputData.password} onChange={onChangeHandel}/>
                </Label>
                <HeroButton type='submit'><span className="text">Sign In</span></HeroButton>
            </Form>
            <Member>
                Not a member?<Link to='/registreation'>Sign up now</Link>
            </Member>
        </Container>
    )
}

export default SignIn