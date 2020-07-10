import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './cart-item.style.js';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer className='cart-item'>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;