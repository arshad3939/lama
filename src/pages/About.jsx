import React from 'react';
import styled from 'styled-components';
import PopularProduct from '../components/PopularProduct';

const Container=styled.section``;

const AboutBanner = styled.div``;
const Image = styled.img``;

const AboutContent = styled.div``;

const GetToKnow = styled.div``;
const About = () => {
  return (
    <Container>
        <AboutBanner>
            <Image src='../' />
        </AboutBanner>
        <AboutContent></AboutContent>
        <PopularProduct />
        <GetToKnow></GetToKnow>
    </Container>
  )
}

export default About