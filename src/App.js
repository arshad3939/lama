import './App.css';
import {Navigetion} from './components/Navigetion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/Footer';
// import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import ContactForm from './pages/ContactForm';
import Registreation from './pages/Registreation';
import SignIn from './pages/SignIn';

const TopAnnouncment = styled.div`
  font-size: 16px;
  color: #fff;
  background: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  width: 100%;
  padding: 10px;
  text-align: center;
`;
function App() {
  return (
    <BrowserRouter basename="/lamaLive">
    <TopAnnouncment>Super Deal! Free Shipping on Orders Over $50</TopAnnouncment>
    <Navigetion />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<ContactForm/>}></Route>
        <Route path='/registreation' element={<Registreation/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
