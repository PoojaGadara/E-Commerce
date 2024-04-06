import Header from './componenets/layout/Header/header.js'
import Footer from './componenets/layout/Footer/footer.js'
import './App.css';
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import webfont from 'webfontloader'
import React from 'react';
import Home from './componenets/Home/home.js';
import ProductDetails from './componenets/Product/ProductDetails.js'
import Products from './componenets/Product/Products.js';
import Search  from './componenets/Product/Search.js';


function App() {

  React.useEffect(() => {
    webfont.load({
      google:{
        families:["Roboto","Droid sans","chilanka"]
      }
    })
  })
  return (
    <>
    <Router>
   
    <Header />
    <Routes>
          <Route path="/" element={<Home/>} />  
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:keyword" element={<Products/>} />
          <Route path="/search" element={<Search/>} />
    </Routes>
    <Footer />
    </Router>
    </>
  );
}

export default App;
