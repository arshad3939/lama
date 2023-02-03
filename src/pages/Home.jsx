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
const BgColor = styled.div`
background-color: #fff;
padding: 40px 0;
width: 100%;
`;
const HeadingTwo = styled.h2`
font-size: 40px;
margin-bottom: 30px;
letter-spacing: 1px;
text-align: center;
`;

const Home = () => {
  return (
    <Container>
      <Slider />
      <Catogries />
      <BgColor>
        <HeadingTwo>
          Popular Products
        </HeadingTwo>
        <PopularProduct />
      </BgColor>
      <Newsletter />
    </Container>
  )
}

export default Home