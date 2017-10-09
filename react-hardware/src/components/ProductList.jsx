import React, { Component } from 'react';
import Product from './Product'


class ProductList extends Component {
    render() {
        const productList = this.props.productList
       
            const productPieces = productList.map((product) => {
                return <Product
                  
                  productName={product.productName}
                  description={product.description}
                  price={product.price}
                    addProductToCart={this.props.addProductToCart}
                  />
              })
          
              return (
                <div>
                  {productPieces}
                </div>
        );
    }
}

export default ProductList;