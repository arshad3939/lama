import React from 'react';
import styled from 'styled-components';
import PopularProducts from './PopularProducts';
import { DeviceSize } from './Responsive';


const Container = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
background-color: #fff;
margin: 40px 0;
@media ${DeviceSize.mobile}{
    padding: 0 0;
    width: 100vw;
}
`;


const GridView = ({products}) => {

  return (
    <>
    <Container>
        {products.map((curElem)=>(
            <PopularProducts {...curElem} key={curElem.id} />
        ))}
    </Container>
    </>
  )
}

export default GridView