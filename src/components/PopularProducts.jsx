import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #08080838;
    z-index: 3;
    opacity: 0;
    transition: all 0.5s ease-in-out;
`;

const Container = styled.div`
flex: 1;
margin: 5px;
display:flex;
align-items: center;
justify-content: center;
min-width: 280px;
height: 350px;
background-color: #fff;
position: relative;
&:hover ${Info}{
    opacity: 1;
}
`;
const Circle = styled.div`
width: 200px;
height: 200px;
background-color: #f6f7ff;
border-radius: 50%;
position: absolute;
`;
const Image = styled.img`
height: 75%;
z-index: 1;
`;

const Icons = styled.div`
width: 50px;
height: 50px;
background-color: #fff;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
cursor: pointer;
transition: all 0.1s ease-in-out;
&:hover{
    transform: scale(1.1);
}
`;



const PopularProducts = (curElem) => {
    const {img} = curElem;
    return (
        <Container >
            <Circle />
            <Image src={img} />
            <Info>
                <Icons>
                    <ShoppingCartOutlined />
                </Icons>
                <Icons>
                    <SearchOutlined />
                </Icons>
                <Icons>
                    <FavoriteBorderOutlined />
                </Icons>
            </Info>
        </Container>
    )
}

export default PopularProducts