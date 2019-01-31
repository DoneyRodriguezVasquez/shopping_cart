//Dependencies
import React from 'react';
import { connect } from 'react-redux';

function sort(items){
  return items.sort((x, y) => x.id < y.id)
}

function Cart(props) {
  return <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>ADD-REMOVE</th>
        <th>DELETE</th>
      </tr>
    </thead>
    <tbody>
      {
        sort(props.cart).map(item => <tr>
          <td>{item.description}</td>
          <td>{item.quantity}</td>
          <td>{item.price}</td>
          <td>
            <button onClick={() => props.addToCart(item)}>+</button>
            <button onClick={() => props.removeFromCart(item)}>-</button>
          </td>
          <td>
            <button onClick={() => props.removeAllFromCart(item)}>Delete</button>
          </td>
        </tr>)
      }
    </tbody>
  </table>
}

function mapStateToProps(state){
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch){
  return{
    addToCart: (item) => {
      dispatch({type: 'ADD', payload: item})
    },
    removeFromCart: (item) =>{
      dispatch({type: 'REMOVE', payload: item})
    },
    removeAllFromCart: (item) =>{
      dispatch({type: 'REMOVE_ALL', payload: item})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
