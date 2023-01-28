import React from 'react'
import styled from 'styled-components';
import { useProductContext } from '../context/ProductContext';
import PopularProducts from './PopularProducts';

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

const PopularProduct = () => {
    const {isLoading, featured} = useProductContext();

    if(isLoading){
        return<div>....Loading</div>;
    }

  return (
    <>
        <Tittle>Popular Products</Tittle>
    <Container>
        {featured.map((curElem)=>(
            <PopularProducts {...curElem} key={curElem.id} />
        ))}
    </Container>
    </>
    )
}

export default PopularProduct