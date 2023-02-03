import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
display: flex;
    display: inline-flex;
    border-radius: 7px;
`;
const Button = styled.button`
background-color: #9c40fc;
    color: #fff;
    border-radius: 6px;
    padding: 6px 7px;
    line-height: 0;
    border: none;
    cursor: pointer;
`;
const Span = styled.span`
width: 60px;
display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
`;
const CartAmountToggle = ({amount, setDecrease, setIncrease}) => {
  return (
    <Container>
        <Button onClick={()=>setDecrease()}><Remove/></Button>
        <Span>{amount}</Span>
        <Button onClick={()=>setIncrease()}><Add/></Button>
    </Container>
  )
}

export default CartAmountToggle