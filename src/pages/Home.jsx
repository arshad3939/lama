import React from 'react';
import Slider from '../components/Slider';
import styled from 'styled-components';
import Catogries from '../components/Catogries';
import Product from '../components/Product';
import Newsletter from '../components/Newsletter';

// styled css
const Container = styled.section`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: #f6f7ff;
flex-direction: column;
`;

const Home = () => {
  return (
    <Container>
      <Slider/>
      <Catogries/>
      <Product />
      <Newsletter />
    </Container>
  )
}

export default Home