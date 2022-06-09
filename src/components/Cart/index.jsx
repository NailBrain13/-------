import CartFooter from '../CartFooter';
import CartHeader from '../CartHeader';
import Product from '../Product';
import products from '../../data';
import { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState(products);

  const productItems = cart.map((item) => {
    return <Product product={item} />;
  });

  return (
    <section className='cart'>
      <CartHeader />
      {productItems}
      <CartFooter />
    </section>
  );
};

export default Cart;
