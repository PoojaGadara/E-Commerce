import React, { Fragment, useEffect, useState } from 'react'
import './Products.css'
import {useSelector , useDispatch} from 'react-redux'
import {clearErrors , getProduct} from '../../actions/productAction'
import Loader from '../layout/Loader/loader'
import ProductCart from '../Home/ProductCart'
import { useParams } from 'react-router-dom';
import  Pagination  from 'react-js-pagination'
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { Slide } from '@mui/material'

const categories = [
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones"
]

const Products = () =>  {

  const dispatch = useDispatch()

  const [currentPage , setCurrentPage] = useState(1)
  const [price , setPrice] = useState([0 , 25000])
  const [category , setCategory] = useState("")
  const [rating , setRating] = useState(0)

  const {
    products,
    loading,
    productsCount,
    resultPerPage,
    filteredProductsCount
  } = useSelector((state) => state.products);

  const keyword = useParams()
  let count = filteredProductsCount

  let obj = keyword;

  const setCurrentPageNo = (e) =>{
      setCurrentPage(e)
  }

  const priceHandler = (event , newPrice) => {
        setPrice(newPrice)
  }
   
  useEffect(() => {
    dispatch(getProduct(obj.keyword , currentPage , price , category , rating) )
  },[dispatch , obj.keyword , currentPage , price , category , rating])
  return (
    <Fragment>
      {loading ? <Loader /> :
      <Fragment>
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products && 
            products.map((product) => (
              <ProductCart key={product._id} product={product} />
            ))}
          </div>

          <div className='filterBox'>
            <Typography>Price</Typography>
            <Slider 
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby='range-slider'
              min={0}
              max={25000}
            />

<Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            <fieldset>
              <Typography>Rating Above</Typography>
              <Slider
                value= {rating}
                onChange={(e,newRating) => {
                    setRating(newRating)
                }}
                aria-labelledby='continuous-slider'
                min={0}
                max={5}
                valueLabelDisplay="auto"
              />
            </fieldset>
          
          </div>


          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
          
      </Fragment>}
    </Fragment>
  )
}

export default Products