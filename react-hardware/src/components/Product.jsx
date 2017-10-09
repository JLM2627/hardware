import React from 'react'
import React, { Component } from 'react';

class Product extends Component {
    render () {
        const productName = this.props.productName
        const description = this.props.description
        const price = this.props.price
      
        return (
          <div className="product-list">
            <h3>{productName}</h3>
            <div>{description}</div>
            <div>{price}</div>
      
       
          </div>
        )
      }
   
}

export default Product;



















/* const Product = ({ productName, price, description }) => {
    render () {
        const productName = this.props.productName
        const description = this.props.description
        const price = this.props.price
      
        return (
          <div className="product-display">
            <h3>{productName}</h3>
            <div>{description}</div>
            <div>{price}</div>
      
            {this.showOptions()}
          </div>
        )
      }

  
} */


