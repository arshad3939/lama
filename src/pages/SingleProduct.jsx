import { LocalShipping, PublishedWithChanges, Security } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import AddToCart from '../components/AddToCart';
import FormatPrice from '../components/FormatPrice';
import MyImages from '../components/MyImages';
import PageNavigetion from '../components/PageNavigetion';
import { DeviceSize } from '../components/Responsive';
import Star from '../components/Star';
import { useProductContext } from '../context/ProductContext';


const Container = styled.section`
width: 100%;
padding: 11px 60px;
@media ${DeviceSize.mobile}{
  padding: 11px 22px;
}
`;

const Wrapper = styled.div`
display: flex;
margin-top: 30px;
align-items: center;
@media ${DeviceSize.mobile}{
  flex-wrap: wrap;
}
`;

const Left = styled.div`
width: 100%;
`;

const Right = styled.div`
padding-left: 40px;
width: 100%;
  h2{
    font-size: 60px;
      text-transform: capitalize;
      background: linear-gradient(144deg,#AF40FF,#5B42F3 50%,#00DDEB);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
  }
  span{
    font-weight: 600;
  }
  p{
    font-size: 16px;
    letter-spacing: 1px;
    color: #7e799d;
  }
  .desc{
      padding-right: 100px;
      @media ${DeviceSize.mobile}{
        padding: 0;
      }
    }
  h3{
    margin-bottom: 20px;
  }
@media ${DeviceSize.mobile}{
  padding: 0;
  margin-top: 20px;
}
`;
const Iconsd = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 10px 30px;
border: 1px solid #d9d9dd;
padding: 11px 12px;
@media ${DeviceSize.mobile}{
  margin: 10px 6px;
}
`;
const FourIcons = styled.div`
display: flex;
margin: 20px 0;
color:#7d7e89;
${Iconsd}:nth-child(1){
  margin-left: 0;
}
`;

const ProductDetails=styled.div``;
const Carts = styled.div``;


const API = "https://api.pujakaitem.com/api/products"

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  const { id } = useParams();

  const { id:alias, name, image, company, description, stars, reviews, price, stock } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);

  },[]);

  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }

  return (
    <Container>
      <PageNavigetion title={name} />
      <Wrapper>
        <Left>
          <MyImages imgs={image} />
        </Left>
        <Right>
          <h2>{name}</h2>
          <Star stars={stars} reviews={reviews} />
          <p>MRP: <del><FormatPrice price={price + 250000}></FormatPrice></del></p>
          <h3>Deal of the Day: <FormatPrice price={price} /></h3>
          <p className='desc'>{description}</p>
          <FourIcons>
            <Iconsd>
              <LocalShipping />
              <p>Free Delivery</p>
            </Iconsd>
            <Iconsd>
              <PublishedWithChanges />
              <p>30 Days Replacement</p>
            </Iconsd>
            <Iconsd>
              <Security />
              <p>3 Years Warranty</p>
            </Iconsd>
          </FourIcons>
          <ProductDetails>
            <p>Available: 
              <span> {stock}  {stock > 0 ? "In-Stock" : "Not Available" }</span> 
            </p>
            <p>Brand:<span> {company}</span></p>
          </ProductDetails>
          <hr style={{width:"85%", marginTop: "30px", opacity: "0.3"}}/>
          <Carts>
            {stock > 0 && <AddToCart product={singleProduct} />}
          </Carts>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default SingleProduct