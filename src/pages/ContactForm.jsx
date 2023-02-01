import React from 'react';
import styled from 'styled-components';
import { DeviceSize } from '../components/Responsive';

const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`;

const MapArea = styled.div`
width: 100%;
`;
const Iframe = styled.iframe`
@media ${DeviceSize.mobile}{
  height: 240px;
}
`;

const Contactform = styled.div`
margin: 60px 0;
@media ${DeviceSize.mobile}{
  margin: 11px 30px;
}
`;
const Tittle = styled.h1`
font-size: 46px;
margin-bottom: 38px;
@media ${DeviceSize.mobile}{
  font-size: 30px;
  margin-top: 30px;
}
`;
const Form = styled.form`
display: flex;
flex-direction: column;
`;
const Row = styled.div`
width: 50vw;
display: flex;
justify-content: space-between;
margin-bottom: 14px;
@media ${DeviceSize.mobile}{
  flex-direction: column;
  width: 100%;
  margin-bottom: 0;
}
`;
const Label = styled.label`
display: flex;
flex-direction: column;
width: 48%;
color: #0d0c22;
font-weight: 600;
letter-spacing: 1px;
@media ${DeviceSize.mobile}{
  width: 100%;
  margin-bottom: 14px;
}
`;
const Input = styled.input`
    border: 1px solid transparent;
transition: background-color 200ms ease, outline 200ms ease, color 200ms ease, box-shadow 200ms ease, -webkit-box-shadow 200ms ease;
border-radius: 6px;
outline: none;
background-color: #f3f3f4;
color: #0d0c22;
appearance: none;
line-height: 28px;
height: 40px;
padding: 10px 16px;
margin-top: 7px;
font-size: 16px;
    letter-spacing: 1px;
&:hover{
    border-color: rgba(234,76,137,0.4);
    background-color: #fff;
    -webkit-box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
}
&:focus{
    border-color: rgba(234,76,137,0.4);
    background-color: #fff;
    -webkit-box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
}
`;
const Textarea = styled.textarea`
height: 20vh;
margin: 10px 0;
padding: 10px 10px;
width: 50vw;
border: 1px solid transparent;
transition: background-color 200ms ease, outline 200ms ease, color 200ms ease, box-shadow 200ms ease, -webkit-box-shadow 200ms ease;
border-radius: 6px;
outline: none;
background-color: #f3f3f4;
color: #0d0c22;
appearance: none;
line-height: 28px;
padding: 10px 16px;
margin-top: 7px;
font-size: 16px;
    letter-spacing: 1px;
&:hover{
    border-color: rgba(234,76,137,0.4);
    background-color: #fff;
    -webkit-box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
}
&:focus{
    border-color: rgba(234,76,137,0.4);
    background-color: #fff;
    -webkit-box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
}
@media ${DeviceSize.mobile}{
  width: 100%;
  margin-bottom: 14px;
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
  margin-top: 20px;

&:active{
  outline: 0;
}
&:hover {
  outline: 0;
}

span {
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

&:hover span {
  background: none;
}

@media ${DeviceSize.mobile} {  
  margin: 0 auto;
    width: 100%;
    font-size: 18px;  
}
`




const ContactForm = () => {
  return (
    <Container>
      <MapArea>
        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5081063748266!2d75.9342876153731!3d22.746517432295793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e3cd9d3de1ad%3A0xebaf3ee69f583ff5!2sPhoenix%20Citadel%20Mall!5e0!3m2!1sen!2sin!4v1675158310108!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></Iframe>
      </MapArea>
      <Contactform>
        <Tittle>
          Love to hear from you, <br />Get in touch 👋
        </Tittle>
        <Form action='https://formspree.io/f/xqkoedna' method="POST">
          <Row>
            <Label> First Name
              <Input type='text' placeholder='Arshad' name='First Name' autoComplete='off' required />
            </Label>
            <Label> Last Name
              <Input type='text' placeholder='Qureshi' name='Last Name' autoComplete='off' required />
            </Label>
          </Row>
          <Row>
            <Label>Phone Number
              <Input type='number' placeholder='12 3456 789' name='Phone Number' autoComplete='off' required />
            </Label>
            <Label> Your Email
              <Input type='email' placeholder='itanexmple@gmail.com' name='Email' autoComplete='off' required />
            </Label>
          </Row>
            <Label>Message
              <Textarea placeholder='Enter your message' name='Message' autoComplete='off' required />
            </Label>

          <HeroButton type='submit' value='Send Now'><span className="text">Just Send ↗</span></HeroButton>
        </Form>
      </Contactform>
    </Container>
  )
}

export default ContactForm