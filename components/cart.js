import React, { useState } from 'react';
import Link from 'next/link';
import { ItemQuantity } from 'components';
import { formatCurrency } from 'utils';
import { useCart } from 'hooks';
import * as styles from './cart.styles';

const Cart = () => {
  const [{ cart, show }, cartActions] = useCart();
  const cartStateStyle = show ? styles.show : styles.hide;

  return (
    <div css={[styles.cart, cartStateStyle, !show && { boxShadow: 'none' }]}>
      <header css={styles.cartHeader}>
        <h3 css={styles.cartTitle}>Your Cart</h3>
        <button css={styles.closeButton} onClick={cartActions.toggleCart}>
          <img
            css={styles.closeIcon}
            src="https://nacelle-assets.s3-us-west-2.amazonaws.com/default-close-icon.svg"
          />
        </button>
      </header>
      <section css={styles.cartItems}>
        {cart.map((item) => (
          <CartItem item={item} key={item.id} cartActions={cartActions} />
        ))}
      </section>
      <footer css={styles.subTotalFooter}>
        <h4 css={styles.subTotal}>
          <span>SubTotal:</span>
          <span css={styles.subtotalPrice}>{calculateSubTotal(cart)}</span>
        </h4>
      </footer>
      <button disabled={cart.length === 0} css={styles.checkoutButton}>
        Checkout
      </button>
    </div>
  );
};

const CartItem = ({ item, cartActions }) => {
  const [itemQuantity, updateQuantity] = useState(item.quantity || 0);

  const incrementQty = () => {
    const qty = itemQuantity + 1;

    cartActions.incrementItem(item);
    return updateQuantity(qty);
  };

  const decrementQty = () => {
    if (itemQuantity < 2) {
      return null;
    }

    const qty = itemQuantity > 2 ? itemQuantity - 1 : 1;

    cartActions.decrementItem(item);
    return updateQuantity(qty);
  };

  const removeItemFromCart = () => cartActions.removeFromCart(item);

  return (
    <div css={styles.cartItem}>
      <Link href={`/products/${item.handle}`}>
        <a css={styles.thumbnailContainer}>
          <img css={styles.cartItemThumbnail} src={item.image.thumbnailSrc} />
        </a>
      </Link>

      <div css={[styles.column, { width: '100%' }]}>
        <h4 css={styles.cartItemTitle}>{item.title}</h4>
        <div css={styles.productInteractLayout}>
          <span css={styles.cartItemPrice}>{formatCurrency(item.price)}</span>
          <ItemQuantity
            quantity={itemQuantity}
            incrementFn={incrementQty}
            decrementFn={decrementQty}
          />
          <button onClick={removeItemFromCart} css={styles.removeProductButton}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

function calculateSubTotal(cart) {
  const total = cart.reduce((subTotal, item) => {
    const itemTotal = item.quantity * parseInt(item.price, 10);
    return subTotal + itemTotal;
  }, 0);

  return formatCurrency(total);
}

export default Cart;
