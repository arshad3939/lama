import React from 'react';
import styled from 'styled-components';
import ProductList from '../components/ProductList';
import Sort from '../components/Sort';


const Container = styled.section`
padding: 50px 60px;

`;
const TopFilterRow = styled.div`
width: 89.5%;
margin: 0 auto;
background-color: #eeedff;
`;
const BottomProductsRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;


const Product = () => {

  return (
    <Container>
      <TopFilterRow>
        <Sort/>
      </TopFilterRow>
      <BottomProductsRow>
        <ProductList />
      </BottomProductsRow>
    </Container>
  )
}

export default Product