import BtnDelete from '../Buttons/Delete';
import Count from '../Count';
import './style.scss';

const Product = () => {
  return (
    <>
      <section className='product'>
        <div className='product__img'>
          <img src='./img/products/macbook.jpg' alt='Apple MacBook Air 13' />
        </div>
        <div className='product__title'>Apple MacBook Air 13</div>
        <div className='product__count'>
          <Count />
        </div>
        <div className='product__price'>110 000 руб.</div>
        <div className='product__controls'>
          <BtnDelete />
        </div>
      </section>

      <section className='product'>
        <div className='product__img'>
          <img src='./img/products/apple-watch.jpg' alt='Apple watch' />
        </div>
        <div className='product__title'>Apple watch</div>
        <div className='product__count'>
          <Count />
        </div>
        <div className='product__price'>29 000 руб.</div>
        <div className='product__controls'>
          <BtnDelete />
        </div>
      </section>

      <section className='product'>
        <div className='product__img'>
          <img src='./img/products/mac-pro.jpg' alt='Mac Pro' />
        </div>
        <div className='product__title'>Mac Pro</div>
        <div className='product__count'>
          <Count />
        </div>
        <div className='product__price'>190 000 руб.</div>
        <div className='product__controls'>
          <BtnDelete />
        </div>
      </section>
    </>
  );
};

export default Product;
