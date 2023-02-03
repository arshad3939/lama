import { CheckRounded } from '@mui/icons-material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartAmountToggle from './CartAmountToggle';
import { DeviceSize } from './Responsive';

const Container = styled.section`
margin: 20px 0;
`;
const CartColor = styled.div`
display: flex;
align-items: center;
margin: 20px 0;
`;
const Colors = styled.div`
display: flex;
align-items: center;
margin-left: 30px;
.active{
    opacity: 1;
}
.check-style{
    font-size: 16px;
    color: #fff;
}
`;

const Button = styled.button`
width: 30px;
height: 30px;
border-radius: 100%;
border: 1px solid #000;
opacity: 0.3;
cursor: pointer;
margin: 10px 10px;
`;
const AddProductToCart = styled.div`
margin-top: 30px;
a{
    text-decoration: none;
}
`;
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
  padding: 16px 48px;
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
`

const AddToCart = ({ product }) => {
    const { id, colors, stock, } = product;
    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);
    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };
    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    };

    return (
        <Container>
            <CartColor>
                <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />
                <Colors>
                    <p>Color:</p>
                    {colors.map((curColor, index) => {
                        return (
                            <Button key={index}
                                style={{ backgroundColor: curColor }}
                                className={color === curColor ? "active" : ""}
                                onClick={() => setColor(curColor)}
                            >{color === curColor ? <CheckRounded className='check-style' /> : null}</Button>
                        )
                    })}
                </Colors>
            </CartColor>
            <AddProductToCart>
                {/* <Link to='/'cart > */}
                    <HeroButton><span className="text">Add to Cart</span></HeroButton>
                {/* </Link> */}
            </AddProductToCart>

        </Container>
    )
}

// onClick={()=> addtoCart(id, color, amount, product)}



export default AddToCart