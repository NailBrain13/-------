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
          <div class='count'>
            <div class='count__box'>
              <input
                type='number'
                class='count__input'
                min='1'
                max='100'
                value='1'
              />
            </div>
            <div class='count__controls'>
              <button type='button' class='count__up'>
                <img src='./img/icons/icon-up.svg' alt='Increase' />
              </button>
              <button type='button' class='count__down'>
                <img src='./img/icons/icon-down.svg' alt='Decrease' />
              </button>
            </div>
          </div>
        </div>
        <div class='product__price'>110 000 руб.</div>
        <div class='product__controls'>
          <button type='button'>
            <img src='./img/icons/cross.svg' alt='Delete' />
          </button>
        </div>
      </section>

      <section class='product'>
        <div class='product__img'>
          <img src='./img/products/apple-watch.jpg' alt='Apple watch' />
        </div>
        <div class='product__title'>Apple watch</div>
        <div class='product__count'>
          <div class='count'>
            <div class='count__box'>
              <input
                type='number'
                class='count__input'
                min='1'
                max='100'
                value='1'
              />
            </div>
            <div class='count__controls'>
              <button type='button' class='count__up'>
                <img src='./img/icons/icon-up.svg' alt='Increase' />
              </button>
              <button type='button' class='count__down'>
                <img src='./img/icons/icon-down.svg' alt='Decrease' />
              </button>
            </div>
          </div>
        </div>
        <div class='product__price'>29 000 руб.</div>
        <div class='product__controls'>
          <button type='button'>
            <img src='./img/icons/cross.svg' alt='Delete' />
          </button>
        </div>
      </section>

      <section class='product'>
        <div class='product__img'>
          <img src='./img/products/mac-pro.jpg' alt='Mac Pro' />
        </div>
        <div class='product__title'>Mac Pro</div>
        <div class='product__count'>
          <div class='count'>
            <div class='count__box'>
              <input
                type='number'
                class='count__input'
                min='1'
                max='100'
                value='1'
              />
            </div>
            <div class='count__controls'>
              <button type='button' class='count__up'>
                <img src='./img/icons/icon-up.svg' alt='Increase' />
              </button>
              <button type='button' class='count__down'>
                <img src='./img/icons/icon-down.svg' alt='Decrease' />
              </button>
            </div>
          </div>
        </div>
        <div class='product__price'>190 000 руб.</div>
        <div class='product__controls'>
          <button type='button'>
            <img src='./img/icons/cross.svg' alt='Delete' />
          </button>
        </div>
      </section>
    </>
  );
};

export default Product;
