import { StarHalfSharp, StarOutlineSharp, StarPurple500Sharp } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container=styled.section`
margin-bottom: 20px;
color: orange;
`;
const IconStyle=styled.div`
font-size: 20px;
display: flex;
margin-top: 30px;
`;

const Star = ({stars, reviews}) => {
    const ratingStar = Array.from({length:5},(elem,index)=>{
        let number = index + 0.5;
        // debugger
        return(
            <span key={index}>
                {stars >= index + 1 ? ( <StarPurple500Sharp style={{fontSize: "20px"}}/> ) : stars >= number ?(<StarHalfSharp style={{fontSize: "20px"}}/>):(<StarOutlineSharp style={{fontSize: "20px"}}/>) }
            </span>
        );
    });
  return (
    <Container>
        <IconStyle>
            {ratingStar}
            <p>({reviews} customer reviews)</p>
        </IconStyle>
    </Container>
  )
}

export default Star