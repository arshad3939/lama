import { Send } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { DeviceSize } from './Responsive';

const Container = styled.section`
height: 70vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
@media ${DeviceSize.mobile}{
    height: 40vh;
}
`;

const Tittle = styled.h1`
font-size: 90px;
font-weight: 800;
@media ${DeviceSize.mobile}{
    font-size: 50px;
}
`;

const Desc = styled.p`
font-size: 20px;
margin: 20px 0;
`;

const InputContainer = styled.div`
width: 35vw;
background-color: #fff;
border:1px solid lightgrey;
display: flex;
height: 6vh;
margin-top: 20px;
@media ${DeviceSize.mobile}{
    width: 80vw;
    height: 5vh;
}
`;

const Input = styled.input`
border: none;
flex: 8;
width: 100%;
padding: 0 10px;
font-size: 16px;
`;

const Button = styled.button`
flex: 1;
line-height: 0;
color: #fff;
border: none;
cursor: pointer;
background: linear-gradient(144deg,#AF40FF,#5B42F3 50%,#00DDEB);
@media ${DeviceSize.mobile}{
    padding: 0 8px;
}
`;


const Newsletter = () => {
  return (
    <Container>
        <Tittle>Newsletter</Tittle>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
            <Input placeholder='Your Email' />
            <Button><Send /></Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter