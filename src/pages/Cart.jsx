import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartItems from '../components/CartItems';
import FormatPrice from '../components/FormatPrice';
import { DeviceSize } from '../components/Responsive';
import { useCartContext } from '../context/CartContext';

const Container = styled.section`
padding: 20px 60px;
@media ${DeviceSize.mobile}{
  padding: 20px 22px;
}
`;
const ProductHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
background-color: #f3f0ff;
border-radius: 8pxpx;
margin-top: 30px;
margin-bottom: 10px;
padding: 20px 0;
p{
  flex: 1;
  text-align: center;
}
.hiden{
  @media ${DeviceSize.mobile}{
    display: none;
  }
}
`;
const ProductCartItem = styled.div``;
const BottomButton = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: #f3f0ff;
border-radius: 8pxpx;
margin-top: 30px;
margin-bottom: 10px;
padding: 20px 0;
`;
const ContinueShop = styled.button`
background-color: rgb(34 162 238);
padding: 16px 48px;
border-radius: 6px;
border: none;
cursor: pointer;
margin: 0 20px;
a{
  text-decoration: none;
  color: #fff;
}
&:hover{
  background-image: linear-gradient(144deg,#AF40FF,#5B42F3 50%,#00DDEB);
}
@media ${DeviceSize.mobile}{
  padding: 13px 22px;
  margin: 0 14px;
}
`;
const ClearCart = styled.button`
background-color: rgb(170 64 255);
padding: 16px 48px;
border-radius: 6px;
-webkit-transition: 300ms;
transition: 300ms;
border: none;
cursor: pointer;
margin: 0 20px;
color: #fff;
a{
  text-decoration: none;
  color: #fff;
}
&:hover{
  background-image: linear-gradient(144deg,#AF40FF,#5B42F3 50%,#00DDEB);
}
@media ${DeviceSize.mobile}{
  padding: 13px 22px;
  margin: 0 14px;
}
`;
const Empaty = styled.div`
height: 20vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
h3{
  margin-bottom: 20px;
}
`;
const TotalDetail = styled.div`
display: flex;
justify-content: end;
@media ${DeviceSize.mobile}{
  justify-content: start;
}
`;
const TotalContent = styled.div`
background-color: #f3f0ff;
width: 20vw;
padding: 20px 15px;
color: #000;
@media ${DeviceSize.mobile}{
  width:100%;
}
`;
const SubTotal = styled.div`
margin-bottom: 20px;
display: flex;
justify-content: space-between;
`;
const Shipping = styled.div`
margin-bottom: 20px;
display: flex;
justify-content: space-between;
border-bottom: 1px solid #c8c8c8;
padding-bottom: 20px;
`;
const OrderTotal = styled.div`
display: flex;
justify-content: space-between;
`;

const Cart = () => {
  const { cart, clearCart, totalPrice, shippinFee } = useCartContext();

  if (cart.length === 0) {
    return (
      <Empaty>
        <h3>No Item in the Cart</h3>
        <ContinueShop type='button'><Link to='/product'>Continue Shop</Link></ContinueShop>

      </Empaty>
    )
  } else {
    return (
      <Container>
        <ProductHeader>
          <p>Item</p>
          <p className='hiden'>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
          <p className='hiden'>Remove</p>
        </ProductHeader>
        <ProductCartItem>
          {cart.map((curElem) => {
            return (
              <CartItems key={curElem.id} {...curElem} />
            )
          })}
        </ProductCartItem>
        <BottomButton>
          <ContinueShop type='button'><Link to='/product'>Continue Shop</Link></ContinueShop>
          <ClearCart type='button' onClick={clearCart}>Clear Cart</ClearCart>
        </BottomButton>
        <TotalDetail>
          <TotalContent>
            <SubTotal>
              <p>Subtotal:</p>
              <FormatPrice price={totalPrice}/>
            </SubTotal>
            <Shipping>
              <p>Shipping Fee:</p>
              <FormatPrice price={shippinFee}/>
            </Shipping>
            <OrderTotal>
              <p>Order Total:</p>
              <FormatPrice price ={totalPrice + shippinFee} />
            </OrderTotal>
          </TotalContent>
        </TotalDetail>
      </Container>
    )
  }


}

export default Cart