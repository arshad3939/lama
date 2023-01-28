import React from 'react';
import Slider from '../components/Slider';
import styled from 'styled-components';
import Catogries from '../components/Catogries';
import Newsletter from '../components/Newsletter';
import PopularProduct from '../components/PopularProduct';

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
      <PopularProduct />
      <Newsletter />
    </Container>
  )
}

export default Home