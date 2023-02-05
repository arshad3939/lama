import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Badge } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { ShoppingCart } from '@mui/icons-material';
import Hamburger from 'hamburger-react';
import { Search } from './Navigetion';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const rotate = keyframes`
  from {
    top: 0px;
  }

  to {
    top: 100vh;
  }
`;

const RightMenu = styled.div`
display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 100%;
    animation: ${rotate} 1s linear normal;
    z-index: 999;
    height: 80vh;
    background: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
`;


const MenuLink = styled.nav`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 20px;

a{
    color: #fff;
    font-size: 26px;
    margin: 36px 0;
    font-weight: 700;
    text-decoration: none;
    &:hover{
        color: #000;
    }
}
`
const CartIcon = styled.div`
        
`
const Wrapper = styled.div`
   display: flex;
    width: 100%;
    transition: all 1s 2s ease-in-out;
    position: absolute;
    left: 0;
    top:14%;
`
const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
`;

const MobileNav = () => {
    const [isOpen, setOpen] = useState(false);
    const {totalItem} = useCartContext();

    
   let handler= ()=>{
    if(setOpen){
        setOpen(false)
    }
   }

    let iconColor={
        color: '#000'
    }

    return (
        <Container>
            <Search />
            <Hamburger
                toggled={isOpen}
                toggle={() => setOpen(!isOpen)}
                color="#5B42F3"
                duration={0.8}
                style={{ position: "relative" }} />
            <Wrapper>
                {isOpen && <RightMenu onClick={handler}>
                    <CartIcon >
                        <IconButton aria-label="cart" style={iconColor} >
                            <Badge badgeContent={totalItem} color="primary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </CartIcon>
                    <MenuLink>
                        <Link to="/registreation">Registreation</Link>
                        <Link to="/signin">Sign In</Link>
                        <Link to="/about">About us</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/contact">Contact Us</Link>
                    </MenuLink>
                </RightMenu>}
            </Wrapper>
        </Container>
    )
}

export default MobileNav