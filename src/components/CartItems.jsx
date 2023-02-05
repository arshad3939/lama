import { Delete } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/CartContext';
import CartAmountToggle from './CartAmountToggle';
import FormatPrice from './FormatPrice';
import { DeviceSize } from './Responsive';

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
padding: 20px 0;
align-items: center;
@media ${DeviceSize.mobile}{
  align-items: inherit;
}
`;
const Item = styled.div`
display: flex;
align-items: center;
flex: 1;
img{
  width: 36%;
  object-fit: cover;
  @media ${DeviceSize.mobile}{
    width: 100%
  }
}
p{
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 10px;
}
@media ${DeviceSize.mobile}{
  flex-direction: column;
  align-items: start;
}
`;
const ProductDetail = styled.div`
margin-left: 30px;
@media ${DeviceSize.mobile}{
  margin: 0;
}
`;
const Color = styled.div`
width: 20px;
height: 20px;
border-radius: 100%;
margin-left: 10px;
`;
const Price = styled.div`
flex: 1;
text-align: center;
@media ${DeviceSize.mobile}{
  display: none;
}

`;
const Quantity = styled.div`
flex: 1;
text-align: center;
@media ${DeviceSize.mobile}{
  margin-top: 25px;
}
`;
const SubTotal = styled.div`
flex: 1;
text-align: center;
@media ${DeviceSize.mobile}{
  margin-top: 30px;
}
`;
const DeleteData = styled.div`
flex: 1;
text-align: center;
@media ${DeviceSize.mobile}{
  flex: 0;
  margin-top: 25px;
}

`;

const CartItems = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setDecrease, setIncrease } = useCartContext();
  return (
    <Wrapper>
      <Item>
        <img src={image} alt={name} />
        <ProductDetail>
          <p>{name}</p>
          <span style={{display:"flex"}}>Color: <Color style={{ backgroundColor: color }}></Color></span>
        </ProductDetail>
      </Item>
      <Price>
        <p><FormatPrice price={price} /></p>
      </Price>
      <Quantity>
        <CartAmountToggle amount={amount} setDecrease={()=>setDecrease(id)} setIncrease={()=>setIncrease(id)} />
      </Quantity>
      <SubTotal>
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </SubTotal>
      <DeleteData>
        <Delete style={{ cursor: "pointer" }} onClick={() => removeItem(id)} />
      </DeleteData>
    </Wrapper>
  )
}

export default CartItems