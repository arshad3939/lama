import './App.css';
import {Navigetion} from './components/Navigetion';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/Footer';


const TopAnnouncment = styled.div`
  font-size: 16px;
  color: #fff;
  background: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  width: 100%;
  padding: 10px 0;
  text-align: center;
`;
function App() {
  return (
    <BrowserRouter basename="/lamaLive">
    <TopAnnouncment>Super Deal! Free Shipping on Orders Over $50</TopAnnouncment>
    <Navigetion />
      <Routes>
        <Route path='/lamaLive' element={<Home />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
