import { FavoriteBorderOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DeviceSize } from './Responsive';
import FormatPrice from './FormatPrice';

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #acb5e552;
    z-index: 3;
    opacity: 0;
    transition: all 0.5s ease-in-out;
`;

const Container = styled.div`
    margin: 10px 10px;
    border: 1px solid #f0f0f5;
    background-color: #fff;
    width: 30%;
     @media ${DeviceSize.mobile}{
        width: 100vw;
     }
`;

const TopProductImg = styled.div`
flex: 1;
display:flex;
align-items: center;
justify-content: center;
width: 100%;
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
height: 100%;
width: 100%;
object-fit: cover;
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

const BottomProductContent = styled.div`
    display: flex;
    margin: 0 15px;
    justify-content: space-between;
    padding: 18px 11px;
    background-color: #fff;
    align-items: center;
    a{
        text-decoration: none;
        color: #000;
        &:hover{
            color: blue;
        }
    }
`;

const Tittle = styled.h1`
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    padding-right: 43px;
`;

const PriceLabel = styled.label`
    font-size: 26px;
    color: red;
    @media ${DeviceSize.mobile}{
        font-size: 16px;
    }
`;


const PopularProducts = (curElem) => {
    const { id, image, name, price } = curElem;
    return (
        <Container >
            <TopProductImg>
                <Circle />
                <Image src={image} />
                <Info>
                    <Icons>
                            <ShoppingCartOutlined />
                    </Icons>
                    <Icons>
                        <FavoriteBorderOutlined />
                    </Icons>
                </Info>
            </TopProductImg>
            <BottomProductContent>
                <Link to={`/singleproduct/${id}`}>
                    <Tittle>{name}</Tittle>
                </Link>
                <PriceLabel><FormatPrice price={price} /></PriceLabel>
            </BottomProductContent>
        </Container>
    )
}

export default PopularProducts