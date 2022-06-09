import BtnDelete from '../Buttons/Delete';
import Count from '../Count';
import './style.scss';

const Product = ({
  product,
  deleteProduct,
  countUp,
  countDown,
  changeValue,
}) => {
  const { img, title, id, price, count } = product;

  return (
    <section className='product'>
      <div className='product__img'>
        <img src={`./img/products/${img}`} alt={title} />
      </div>
      <div className='product__title'>{title}</div>
      <div className='product__count'>
        <Count
          count={count}
          countUp={countUp}
          countDown={countDown}
          changeValue={changeValue}
          id={id}
        />
      </div>
      <div className='product__price'>{price} руб</div>
      <div className='product__controls'>
        <BtnDelete deleteProduct={deleteProduct} id={id} />
      </div>
    </section>
  );
};

export default Product;
