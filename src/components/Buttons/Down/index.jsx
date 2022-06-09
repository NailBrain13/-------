const CountDown = ({ countDown, id }) => {
  return (
    <button type='button' className='count__down' onClick={() => countDown(id)}>
      <img src='./img/icons/icon-down.svg' alt='Decrease' />
    </button>
  );
};

export default CountDown;
