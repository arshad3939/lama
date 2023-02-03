import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.section``;

const PageNavigetion = ({title}) => {
  return (
    <Container>
        <Link to='/'>Home</Link> / {title}
    </Container>
  )
}

export default PageNavigetion