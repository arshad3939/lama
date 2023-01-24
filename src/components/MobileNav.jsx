import React, {useState} from 'react';
import styled, { keyframes } from 'styled-components';
import { Badge } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { ShoppingCart } from '@mui/icons-material';
import Hamburger from 'hamburger-react';
import { Search } from './Navigetion';
import { Link } from 'react-router-dom';

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
    color: #000;
    width: 100%;
    height: 50vh;
    margin-top: 34px;
    animation: ${rotate} 1s linear normal;
    z-index: 999;
    background-color: #fff;
`;


const MenuLink = styled.nav`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 20px;

a{
    color: #000;
    font-size: 26px;
    margin: 36px 0;
    font-weight: 700;
    text-decoration: none;
    &:hover{
        color: #5B42F3;
    }
}
`
const CartIcon = styled.div`
        
`
const Wrapper = styled.div`
   display: flex;
    width: 100%;
    height: 0;
    transition: all 1s 2s ease-in-out;
    position: absolute;
    left: 0;
`


const MobileNav = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
        <Search />
        <Hamburger 
        toggled={isOpen} 
        toggle={()=>setOpen(!isOpen)} 
        color="#5B42F3" 
        style={{position: "relative"}}/>
        <Wrapper>
        {isOpen && <RightMenu>
            <CartIcon >
                <IconButton aria-label="cart" style={{ color: '#000' }} >
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            </CartIcon>
            <MenuLink>
                <Link to="/registreation">Registreation</Link>
                <Link to="/Sign-in">Sign In</Link>
            </MenuLink>
        </RightMenu>}
        </Wrapper>
        </>
    )
}

export default MobileNav