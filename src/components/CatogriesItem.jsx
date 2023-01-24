import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HamSize, DeviceSize } from './Responsive';
import { useMediaQuery } from 'react-responsive';


const Container = styled.section`
    width: 100vw;
    height: 70vh;
    margin: 10px;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    .motion-effect{
        flex: 1;
        width: 100%;
        height: 100%;
        display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
        color: #fff;
        background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
        flex-wrap: wrap;
    }
`;
const Tittle = styled.h1`
    font-size: 35px;
    margin-bottom: 30px;
`;
const Button = styled.button`
  align-items: center;
  background-color: #fff;
  border: 0;
  border-radius: 8px;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
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
  color: #000;
}
span {
  background-color:#000;
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

&:hover span {
  background: none;
}

@media ${DeviceSize.mobile} {  
    font-size: 24px;
    margin: 0 auto;  
}
`;



const CatogriesItem = ({ item }) => {

    let isSmall = useMediaQuery({ maxWidth: HamSize.mobile });
    let variants = isSmall ? {
        hidden:{scale: 0, opacity: 0},
        animate:{scale:1, rotate:0, opacity: 0},
        whileHover:{scale: 1, rotate: 0, opacity: 0.9 },
        whileInView:{opacity: 0.9, transition:{type:"spring", duration:0.8}}
    }
    : {
        hidden:{scale: 0, opacity: 0},
        animate:{scale:1, rotate:0, opacity: 0},
        whileHover:{scale: 1, rotate:360, opacity: 0.9 }
    };

    return (
        <Container>
            <Image src={item.img} alt='' />
            <Info>
                <motion.div className='motion-effect' 
                initial="hidden" 
                animate="animate"
                whileHover="whileHover"
                whileInView="whileInView"
                viewport={{ once: false, amount: 0.9 }}
                variants={variants}>
                    <Tittle>{item.title}</Tittle>
                    <Button><span className="text">Show Now</span></Button>
                </motion.div>
            </Info>
        </Container>
    )
}

export default CatogriesItem