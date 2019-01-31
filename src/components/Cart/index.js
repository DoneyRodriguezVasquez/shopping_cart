//Dependencies
import React, { Component} from 'react';
import MyCart from '../../features/cart';


class  Cart extends Component {
  render(){
    return(
      <div className="Cart">
        <h1>Your shooping cart</h1>
        <MyCart/>
      </div>
    );
  }
}
export default Cart;
