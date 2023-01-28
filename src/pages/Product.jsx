import React from 'react'
import styled from 'styled-components';
import ProductsList from '../components/ProductsList';
// import { useProductContext } from '../context/ProductContext';


const Container = styled.section`
padding: 50px 60px;
`;

const Product = () => {


  return (
    <Container>
      <ProductsList/>
    </Container>
  )
}

export default Product