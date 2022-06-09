const CountUp = ({ countUp, id }) => {
  return (
    <button
      type='button'
      className='count__up'
      onClick={() => {
        countUp(id);
      }}
    >
      <img src='./img/icons/icon-up.svg' alt='Increase' />
    </button>
  );
};

export default CountUp;
