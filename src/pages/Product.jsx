import React from 'react';
import styled from 'styled-components';
import ProductList from '../components/ProductList';
import { DeviceSize } from '../components/Responsive';
import Sort from '../components/Sort';


const Container = styled.section`
padding: 50px 60px;
@media ${DeviceSize.mobile}{
  padding: 34px 0;
}

`;
const TopFilterRow = styled.div`
width: 100%;
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