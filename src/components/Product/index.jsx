import BtnDelete from '../Buttons/Delete';
import Count from '../Count';
import './style.scss';

const Product = ({ product }) => {
  return (
    <section className='product'>
      <div className='product__img'>
        <img src={`./img/products/${product.img}`} alt={product.title} />
      </div>
      <div className='product__title'>{product.title}</div>
      <div className='product__count'>
        <Count />
      </div>
      <div className='product__price'>{product.price} руб</div>
      <div className='product__controls'>
        <BtnDelete />
      </div>
    </section>
  );
};

export default Product;
