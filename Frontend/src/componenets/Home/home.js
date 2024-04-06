import React, { Fragment, useEffect } from 'react'
import { CgMouse } from "react-icons/cg";
import './home.css';
import Product from './ProductCart.js'
import Metadata from '../layout/metadata.js';
import {getProduct} from '../../actions/productAction';
import {useSelector , useDispatch} from 'react-redux'
import Loader from '../layout/Loader/loader';
import {useAlert} from 'react-alert';
import { CLEAR_ERRORS } from '../../constants/productConstant.js';


const Home = () => {

  const alert = useAlert();
  const dispatch = useDispatch()
  const {loading ,error ,products ,productCount} = useSelector(
    (state) => state.products
  )
  useEffect(() => {
    if(error){
       alert.error(error)
       dispatch(CLEAR_ERRORS())
    }
    dispatch(getProduct())
  },[dispatch,error])


  return (
   <Fragment>
      {loading ? (
        <Loader/>
      ): (
        <Fragment>
        <Metadata title="E-Commerce" />
  <div className="banner">
 
           <p>Welcome to Ecommerce</p>
           <h1>FIND AMAZING PRODUCTS BELOW</h1>

           <a href="#container">
             <button>
               Scroll <CgMouse />
             </button>
           </a>
         </div>

         <h2 className='homeHeading'>Featured Products</h2>

         <div className='container' id='container'>
             {products && products.map((product) => 
             <Product product={product}/>
             
             )}
         </div>
   </Fragment>
      )} 
   </Fragment>
  )
}

export default Home;
