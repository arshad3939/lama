import { Facebook, Instagram, Mail, Phone, Room, Twitter } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DeviceSize } from './Responsive';

const Container = styled.section`
padding: 80px 60px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
@media ${DeviceSize.mobile}{
    flex-direction: column;
    padding: 80px 30px;
}
`;
const Left = styled.div`
color: #000;
width: 100%;
flex: 1;
padding-right: 20px;
a{
    text-decoration: none;
    color: #000;
    h1{
        display: flex;               
        align-items: center;
        font-size: 35px;
        margin-bottom: 20px;

        &:hover{
            background: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
            transition: all 0.3s ease-in-out;
            -webkit-background-clip : text;
            -webkit-text-fill-color: transparent;
        }
    }
}
@media ${DeviceSize.mobile}{
    padding: 0;
    margin-bottom: 40px;
    padding-bottom: 30px;
    border-bottom: 1px solid lightgray;
}
`;
const Desc = styled.p`
padding-right: 100px;
@media ${DeviceSize.mobile}{
    padding: 0;
}
`;
const SocialContainer = styled.div`
display: flex;
align-items: center;
margin-top: 20px;
`;
const SocialIcons = styled.div`
width: 40px;
height: 40px;
background: linear-gradient(144deg,#AF40FF,#5B42F3 50%,#00DDEB);
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin: 0 8px;
`;
const Center = styled.div`
flex: 1;
padding: 0 10px;
@media ${DeviceSize.mobile}{
    padding: 0;
    margin-bottom: 40px;
    padding-bottom: 30px;
    border-bottom: 1px solid lightgray;
}
`;
const Tittle = styled.h1`
margin-bottom: 30px;
`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem = styled.li`
width: 50%;
padding-bottom: 10px;
`;
const Right = styled.div`
flex: 1;
padding-left: 20px;
`;
const ContactItem = styled.div`
display: flex;
align-items: center;
padding-bottom: 10px;
`;
const Payment = styled.img`
margin-top: 10px ;
width: 200px;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Link to="/home"><h1>Lama</h1></Link>
                <Desc>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has </Desc>
                <SocialContainer>
                    <SocialIcons>
                        <Facebook style={{ color: "#fff", fontSize: "25px" }} />
                    </SocialIcons>
                    <SocialIcons>
                        <Instagram style={{ color: "#fff", fontSize: "25px" }} />
                    </SocialIcons>
                    <SocialIcons>
                        <Twitter style={{ color: "#fff", fontSize: "25px" }} />
                    </SocialIcons>
                </SocialContainer>
            </Left>
            <Center>
                <Tittle>Useful Links</Tittle>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Tittle>Contact</Tittle>
                <ContactItem> <Room style={{fontSize:"20px", marginRight:"10px"}}/>
                    622 Dixie Path, South Tobinchester 98336
                </ContactItem>
                <ContactItem> <Phone style={{fontSize:"20px", marginRight:"10px"}}/>
                    +1 23 456 78
                </ContactItem>
                <ContactItem> <Mail style={{fontSize:"20px", marginRight:"10px"}}/>
                    contact@lama.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"></Payment>
            </Right>
        </Container>
    )
}

export default Footer