import Header from './componenets/layout/Header/header.js'
import Footer from './componenets/layout/Footer/footer.js'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import webfont from 'webfontloader'
import Home from './componenets/Home/home.js';
import ProductDetails from './componenets/Product/ProductDetails.js'
import Products from './componenets/Product/Products.js';
import Search from './componenets/Product/Search.js';
import LoginSignUp from './componenets/user/LoginSignUp.js';
import Profile from './componenets/user/Profile.js';
import store from './store'
import { loadUser } from './actions/userAction'
import UserOptions from './componenets/layout/Header/UserOptions'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProtectedRoute from './componenets/Route/ProtectedRoute.js';

function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);
  console.log("is", isAuthenticated)

  useEffect(() => {
    webfont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

  }, []);
  return (
    <>
      <Router>

        <Header />
        {isAuthenticated && <UserOptions user={user} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:keyword" element={<Products />} />
          <Route path="/search" element={<Search />} />
          <Route path='/login' element={<LoginSignUp />} />
          <Route exact path='/account' element={<ProtectedRoute />}>
            <Route exact path='/account' element={<Profile />} />
          </Route>
                {/* <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        /> */}
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
