import React, { Component } from 'react'
import Product from './Product'

class CartView extends Component {
  render () {
    return (
     
        <div className = "Cart">
            <h1>Cart</h1>
        <h2>Products</h2>
        <div>
          { this.props.productList.map((product, index) => {
            return (
              <div key={index}>
                <Product
                  productName={product.productName}
                  price={product.price}
                  description={product.description}
                />
                <button>Add To Cart</button>
                <button></button>
              </div>
            )
          }) }
        </div>
      </div>
      
    )
  }
}

export default CartView
