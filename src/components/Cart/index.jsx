import CartFooter from '../CartFooter';
import CartHeader from '../CartHeader';
import Product from '../Product';
import products from '../../data';
import { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState(products);

  const [total, setTotal] = useState({
    price: cart.reduce((prev, cur) => {
      return prev + cur.price;
    }, 0),
    count: cart.reduce((prev, cur) => {
      return prev + cur.count;
    }, 0),
  });

  useEffect(() => {
    setTotal({
      price: cart.reduce((prev, cur) => {
        return prev + cur.price;
      }, 0),
      count: cart.reduce((prev, cur) => {
        return prev + cur.count;
      }, 0),
    });
  }, [cart]);

  const deleteProduct = (id) => {
    console.log('Done', id);
    setCart((cart) => {
      return cart.filter((product) => {
        return id !== product.id;
      });
    });
  };

  const countUp = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: ++product.count,
            price: ++product.count * product.priceTotal,
          };
        }
        return product;
      });
    });
  };

  const countDown = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count - 1 > 1 ? product.count - 1 : 1,
            price:
              (product.count - 1 > 1 ? product.count - 1 : 1) *
              product.priceTotal,
          };
        }
        return product;
      });
    });
  };

  const changeValue = (id, value) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
            price: value * product.priceTotal,
          };
        }
        return product;
      });
    });
  };

  const productItems = cart.map((item) => {
    return (
      <Product
        product={item}
        key={item.id}
        deleteProduct={deleteProduct}
        countUp={countUp}
        countDown={countDown}
        changeValue={changeValue}
      />
    );
  });

  return (
    <section className='cart'>
      <CartHeader />
      {productItems}
      <CartFooter total={total} />
    </section>
  );
};

export default Cart;
