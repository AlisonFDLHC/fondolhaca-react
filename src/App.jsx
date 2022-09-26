import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/esm/Container';

import { Route, Routes } from 'react-router-dom'

import Header from './components/Header';
import Main from './components/Main';
import Content from './components/Content';
import Footer from './components/Footer';

import GoToTop from './components/GoToTop';

function App() {
  return (
    <div className="App">
    <Container fluid className={`headerBackground p-0`}>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Main page="main"/>}/>
        <Route path="sobre" exact element={<Main page="sobre"/>}/>
        <Route path="servicos" exact element={<Main page="servicos"/>}/>
        <Route path="contato" exact element={<Main page="contato"/>}/>
      </Routes>
    </Container>
    <Routes>
      <Route path="/" exact element={<Content page="main"/>}/>
      <Route path="sobre" exact element={<Content page="sobre"/>}/>
      <Route path="servicos" exact element={<Content page="servicos"/>}/>
      <Route path="contato" exact element={<Content page="contato"/>}/>
    </Routes>  
    
    <Footer />
    <GoToTop/>
    </div>
  );
}

export default App;
