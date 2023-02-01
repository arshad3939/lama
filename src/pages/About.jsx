import React from 'react';
import styled from 'styled-components';
import PopularProduct from '../components/PopularProduct';
import { DeviceSize } from '../components/Responsive';
import pic from '../images/Om-Lama-Marianne-Lars-headerimage-2020-02.webp'

const Container = styled.section`
`;

const AboutBanner = styled.div`
    height: 65vh;
    position: relative;
    &::before{
    content: '';
    background: linear-gradient(0deg, rgb(245 245 245) 31%, rgba(255,255,255,0) 100%);
    height: 35vh;
    width: 100%;
    position: absolute;
    bottom: 0;
}
`;
const Image = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
background-image: url(${pic});
background-position: top;
background-repeat: no-repeat;
border: none;
`;
const Heading = styled.h1`
position: absolute;
    bottom: 65px;
    left: 50%;
    right: 50%;
    transform: translate(-50%, 10px);
    width: 20vw;
    font-size: 60px;
    text-align: center;
    background: linear-gradient(144deg,#AF40FF,#5B42F3 50%,#00DDEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media ${DeviceSize.mobile}{
        width: 75vh;
        font-size: 44px;
    }
`;

const AboutContent = styled.div`
width: 60vw;
margin: 49px auto;
text-align: center;
@media ${DeviceSize.mobile}{
    width: 90vw;
}

`;
const HeadingTwo = styled.h2`
font-size: 40px;
margin-bottom: 30px;
letter-spacing: 1px;
text-align: center;
`;
const Peragraph = styled.p`
letter-spacing: 1px;
font-size: 20px;
color: #7e799d;
line-height: 39px;
`;

const Popular = styled.div`
background-color: rgb(246, 247, 255);
padding: 50px 0;
`;


const About = () => {
    return (
        <Container>
            <AboutBanner>
                <Image />
                <Heading>LAMA A LOVE STORY</Heading>
            </AboutBanner>
            <AboutContent>
                <HeadingTwo>
                    LARS + MARIANNE = LAMA
                </HeadingTwo>
                <Peragraph>
                    Love is the driving force behind Lama, both through the choice of name and the operation itself.

                    The name is simply the combination of the initials of the owners Lars and Marianne. They found love in adulthood and started a shop that has since developed into what Lama is today. They have also chosen a heart as their logo to show that everything they do comes from the heart.

                    Lama Interiør is built on the love of beautiful things, and the desire to build and create. Ever since it started in 2002, Lama has developed unique interior products made from durable, good materials, and with an unwavering principle of ethically responsible production.

                    We create interiors with heart. I love the freedom to make my own decisions and really believe in what I create.
                    - Marianne
                </Peragraph>
            </AboutContent>
            <Popular>
                <HeadingTwo>
                    Popular Products
                </HeadingTwo>
                <PopularProduct />
            </Popular>
        </Container>
    )
}

export default About