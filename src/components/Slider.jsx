import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DeviceSize } from '../components/Responsive';
import { sliderItems } from '../data';



const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  @media ${DeviceSize.mobile}{
    padding: 0 5px 0 5px;
  }
`;
// Hero Sectoin css
const Hero = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Arrow = styled.div`
    width: 50px;
  height: 50px;
  background-color: #0000003b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Slide = styled.div`
    width: 100vw;
  height: 762px;
  display: flex;
  align-items: center;
  @media ${DeviceSize.mobile}{
    flex-wrap: wrap;
    height: inherit;
    padding: 55px 0;
  }
`
const ImageSection = styled.div`
width: 100%;
position: relative;
`;
const ImageBox = styled.div`
    width: 47%;
    margin: 0 auto;
img{
    margin: 0 auto;
    display: flex;
    @media ${DeviceSize.mobile}{
      object-fit: contain;
    width: 100%;
    }
  }
`;
const ContentSection = styled.div`
  width: 100%;
  padding-right: 78px;
  @media ${DeviceSize.mobile}{
    padding: 0;
  }
`;
const HeroHeading = styled.h1`
  font-size: 70px;
  font-weight: 800;
  background: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media ${DeviceSize.mobile}{
    font-size: 38px;
    text-align: center;
  }
`;
const HeroSubHeading = styled.h2`
  font-size: 20px;
  letter-spacing: 2px;
  margin-top: 15px;
  font-weight: 600;
  color: #000;
  margin-bottom: 40px;
  @media ${DeviceSize.mobile}{
    font-size: 16px;
    text-align: center;
    padding: 0 20px;
  }
`
const HeroButton = styled.button`
  font-size: 18px;
  align-items: center;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;

&:active{
  outline: 0;
}
&:hover {
  outline: 0;
}

span {
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
  a{
    text-decoration: none;
    color: #fff;
  }
}

&:hover span {
  background: none;
}

@media ${DeviceSize.mobile} {  
    font-size: 24px;
    margin: 0 auto;  
}
`
const Circle = styled.div`
width: 500px;
    height: 500px;
    background-color: ${props => props.bg};
    border-radius: 50%;
    position: absolute;
    margin-left: -98px;
    z-index: -1;
    top: 5%;
    left: 20%;
    @media ${DeviceSize.mobile}{
      width: 200px;
      height: 200px;
      top: 6%;
      left: 40%;
    }
`;

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setSlideIndex(slideIndex => slideIndex < 2 ? slideIndex + 1 : 0)
    }, 3000);
    return () => {
      resetTimeout();
    };
  }, [])

  const HandelClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }

  return (
    <Wrapper>
      <Arrow direction="left" onClick={() => HandelClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Hero slideIndex={slideIndex} >
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <ImageSection>
              <ImageBox>
                <img src={item.img} alt=''></img>
                <Circle bg={item.bg} />
              </ImageBox>
            </ImageSection>
            <ContentSection>
              <HeroHeading>{item.title}</HeroHeading>
              <HeroSubHeading>{item.desc}</HeroSubHeading>
              <HeroButton><span className="text"><Link to='/product'>Show Now</Link></span></HeroButton>
            </ContentSection>
          </Slide>
        ))}
      </Hero>
      <Arrow direction="right" onClick={() => HandelClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Wrapper>
  )
}

export default Slider