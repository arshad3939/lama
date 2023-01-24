import React from 'react'
import styled from 'styled-components';
import { popularProducts } from '../data';
import Products from './Products';

const Container = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`;

const Tittle = styled.h1`
    font-weight: 800;
    font-size: 60px;
    text-align: center;
    margin-top: 60px;
    margin-bottom: 30px;
`

const Product = ({item}) => {
  return (
    <>
        <Tittle>Popular Products</Tittle>
    <Container>
        {popularProducts.map((item)=>(
            <Products item={item} key={item.id} />
        ))}
    </Container>
    </>
    )
}

export default Product