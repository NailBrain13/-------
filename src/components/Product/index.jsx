import BtnDelete from '../Buttons/Delete';
import Count from '../Count';
import './style.scss';

const Product = (props) => {
  console.log(props.product);
  return (
    <section className='product'>
      <div className='product__img'>
        <img
          src={`./img/products/${props.product.img}`}
          alt={props.product.title}
        />
      </div>
      <div className='product__title'>{props.product.title}</div>
      <div className='product__count'>
        <Count />
      </div>
      <div className='product__price'>{props.product.price} руб</div>
      <div className='product__controls'>
        <BtnDelete />
      </div>
    </section>
  );
};

export default Product;
