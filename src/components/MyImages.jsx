import React, { useState } from 'react';
import styled from 'styled-components';
import { DeviceSize } from './Responsive';

const Container=styled.section`
display: flex;
align-items: center;
width: 100%;
@media ${DeviceSize.mobile}{
    flex-wrap: wrap-reverse;
}
`;
const FourImages = styled.div`
width: 15%;
margin: 0 5px;
cursor: pointer;
img{
    width: 100%;
    object-fit: cover;
    &:hover{
        box-shadow: -3px 3px 20px 0px #9f99b9;
    }
    @media ${DeviceSize.mobile}{

    height: 100%;
    }
}
@media ${DeviceSize.mobile}{
    width: 100%;
    margin: 0;
    display: flex;
}
`;
const MainImag= styled.div`
width: 85%;
img{
    width: 34vw;
    object-fit: cover;
    height: 50vh;
    @media ${DeviceSize.mobile}{
        width: 100%;
    }
}
@media ${DeviceSize.mobile}{
        width: 100%;
    }
`;
const Figure = styled.figure`

@media ${DeviceSize.mobile}{
    margin: 5px 5px;
}
`;

const MyImages = ({imgs = [{url:""}] }) => {
    const [mainImage, setMainImage] = useState(imgs[0]);
  return (
    <Container>
        <FourImages>
            {imgs.map((curElm, index)=>{
                return(
                    <Figure key={index}>
                    <img src={curElm.url} alt={curElm.filename}  onClick={()=>setMainImage(curElm)} />
                </Figure>
                );
            })}
        </FourImages>
        <MainImag>
            <img src={mainImage.url} alt={mainImage.filename}/>
        </MainImag>
    </Container>
  )
}

export default MyImages