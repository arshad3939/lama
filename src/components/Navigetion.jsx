import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Badge } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { ShoppingCart } from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react';
import { Containers, SearchInput, IconRightArrow, IconMagnifyingGlass } from "./styles";
import MobileNav from './MobileNav';
import { DeviceSize, HamSize } from './Responsive';
import { useMediaQuery } from 'react-responsive';


// styled components css
const Container = styled.section`
width : 100%;
height: 65px;
display: flex;
align-items: center;
`;
const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
flex-flow: row wrap;
padding: 0 60px;
@media ${DeviceSize.mobile}{
    padding: 0 20px;
}
`
const LeftMenu = styled.div`
color: #000;
width: 100%;
flex: 0;
a{
    text-decoration: none;
    color: #000;
    h1{
        display: flex;               
        align-items: center;
        justify-content: center;
        font-size: 35px;

        &:hover{
            background: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
            transition: all 0.3s ease-in-out;
            -webkit-background-clip : text;
            -webkit-text-fill-color: transparent;
        }
    }
}
`
const RightMenu = styled.div`
color: #000;
width: 100%;
display: flex;
justify-content: end;
align-items: center;
flex: 1;
`;


const MenuLink = styled.nav`
display: flex;
align-items: center;
justify-content: center;
margin: 0 20px;
width: 15%;
text-align: center;


a{
    text-decoration: none;
    width: 100%;
    color: #000;
    padding: 0 10px;
    border-right: 1px solid #00000038;
    &:hover{
        color: #5B42F3;
        transition: all 0.3s ease-in-out;
        font-weight: 600;
    }
}
`
const CartIcon = styled.div`
        
`
const Navigetion = () => {

    const isMobile = useMediaQuery({ maxWidth: HamSize.mobile });

    // Toggle button for fAQ tab
    // const [toggle, setToggle] = useState(true);
    // const handleClick = () =>{
    //     setToggle(!toggle);
    // };

    return (
        <Container>
            <Wrapper>
                <LeftMenu><Link to="/home"><h1>Lama</h1></Link>
                </LeftMenu>
                <RightMenu>
                    {!isMobile && <Search />}
                    {!isMobile && <MenuLink>
                        <Link to="/registreation">Registreation</Link>
                        <Link to="/Sign-in">Sign In</Link>
                    </MenuLink>}
                    {!isMobile && <CartIcon >
                        <IconButton aria-label="cart" style={{ color: '#393e46' }} >
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </CartIcon>}
                </RightMenu>
                {isMobile && <MobileNav  />}
            </Wrapper>
        </Container>
    );
};

const Search = () => {
    const targetRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const showSearchInput = isHovered || isFocused;

    useEffect(() => {
        targetRef.current.value = "";
    }, [showSearchInput]);

    return (
        <>
            <Containers
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                hover={showSearchInput}
            >
                <SearchInput placeholder='Search here...' ref={targetRef} showSearchInput={showSearchInput} />
                {showSearchInput ? <IconRightArrow /> : <IconMagnifyingGlass />}
            </Containers>
        </>

    );
}

export { Navigetion, Search };