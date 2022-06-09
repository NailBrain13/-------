import BtnDelete from '../Buttons/Delete';
import Count from '../Count';
import './style.scss';

const Product = () => {
  return (
    <>
      <section class='product'>
        <div class='product__img'>
          <img src='./img/products/macbook.jpg' alt='Apple MacBook Air 13' />
        </div>
        <div class='product__title'>Apple MacBook Air 13</div>
        <div class='product__count'>
          <Count />
        </div>
        <div class='product__price'>110 000 руб.</div>
        <div class='product__controls'>
          <BtnDelete />
        </div>
      </section>

      <section class='product'>
        <div class='product__img'>
          <img src='./img/products/apple-watch.jpg' alt='Apple watch' />
        </div>
        <div class='product__title'>Apple watch</div>
        <div class='product__count'>
          <Count />
        </div>
        <div class='product__price'>29 000 руб.</div>
        <div class='product__controls'>
          <BtnDelete />
        </div>
      </section>

      <section class='product'>
        <div class='product__img'>
          <img src='./img/products/mac-pro.jpg' alt='Mac Pro' />
        </div>
        <div class='product__title'>Mac Pro</div>
        <div class='product__count'>
          <Count />
        </div>
        <div class='product__price'>190 000 руб.</div>
        <div class='product__controls'>
          <BtnDelete />
        </div>
      </section>
    </>
  );
};

export default Product;
