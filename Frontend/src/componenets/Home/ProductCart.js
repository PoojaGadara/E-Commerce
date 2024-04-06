import React from 'react';
import { Link } from 'react-router-dom';
import ReactStarts from 'react-rating-stars-component'

const options = {
    edit :false,
    color:"rgba(20,20,20,0.1)",
    size :window.innerWidth < 600 ? 20 :25,
    activeColor : 'tomoto',
    value : 2.5,
}

const ProductCart = ({ product}) => {
  return (
    <div>
      <Link className='productCard' to={`product/${product._id}`}>
        <img src={product.images[0].url} alt={product.name} />
            <p>{product.name}</p>
            <div>
                <ReactStarts {...options} /> 
                <span>
                    ({product.numOfReviews} Review)
                </span>
            </div>
            <span>{`₹${product.price}`}</span>
      </Link>
    </div>
  )
}

export default ProductCart
