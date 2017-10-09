import React, { Component } from 'react';
import Product from './Product'


class ProductList extends Component {
    render() {
        const productList = this.props.productList
       
            const productPieces = productList.map((product, index) => {
                return <Product
                  
                  productName={product.productName}
                  description={product.description}
                  price={product.price}
                  key={index}
                  index={index}
                  deleteProductFromListByIndex={this.props.deleteProductFromListByIndex}
                  addProductToCart={this.props.addProductToCart}
                  removeProductFromCart={this.props.removeProductFromCart}/>
              })
          
              return (
                <div>
                  {productPieces}
                </div>
        );
    }
}

export default ProductList;