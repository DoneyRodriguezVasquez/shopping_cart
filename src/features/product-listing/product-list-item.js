//Dependencies
import React from 'react';

export default function ProductListItem(props){
  return <div className="ProductListItem">
    <h4>{props.product.description}</h4>
    <img
      height={100}
      title={props.product.description}
      alt={props.product.description}
      src={`/products/${props.product.image}`}
    />
    <div>${props.product.price}</div>
    <div>
      <button
        onClick={() => props.addToCart(props.product)}
      >Add to cart ({
        (props.cartItem && props.cartItem.quantity) || 0
      })
      </button>
      {props.cartItem
        ?<button
          onClick={() => props.removeFromCart(props.cartItem)}>Remove
          </button>
        :null
      }
    </div>
  </div>
}
