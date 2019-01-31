//Dependencies
import React, { Component} from 'react';
import ProductListing from '../../features/product-listing';
import data from '../../data/products.json';

class  Products extends Component {
  render(){
    return(
      <div className="Products">
        <br/>
        <h2>List of products</h2>
        <br/>
        <ProductListing products = {data.products}/>
      </div>
    );
  }
}
export default Products;
