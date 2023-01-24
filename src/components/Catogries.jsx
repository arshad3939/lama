import React from 'react';
import styled from 'styled-components';
import CatogriesItem from './CatogriesItem';
import { categories } from '../data';
import { DeviceSize } from './Responsive';

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media ${DeviceSize.mobile}{
        flex-wrap: wrap;
    }
`;

const Catogries = ({item}) => {
  return (
    <Container>
        {categories.map((item)=>(
            <CatogriesItem item={item} key={item.id}/>
        ))};
    </Container>
  )
}

export default Catogries