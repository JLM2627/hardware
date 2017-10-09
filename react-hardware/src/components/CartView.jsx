import React, { Component } from 'react'
import ProductList  from './ProductList'

class CartView extends Component {
  render () {
    return (
     
        <div className = "Cart">
            <h1>Cart</h1>
        <h2>Products</h2>
        <div>
    
            return (
             
                <ProductList
                  productName={product.productName}
                  price={product.price}
                  description={product.description}
                />
                <button>Add To Cart</button>
                <button></button>
              </div>
            )
           }
        </div>
      
      
        )
  
        }
}
export default CartView
