import CountDown from '../Buttons/Down';
import CountUp from '../Buttons/Up';
import './style.scss';

const Count = ({ count, countUp, countDown, changeValue, id }) => {
  return (
    <div className='count'>
      <div className='count__box'>
        <input
          type='number'
          className='count__input'
          min='1'
          max='100'
          value={count}
          onChange={(e) => {
            changeValue(id, +e.target.value);
          }}
        />
      </div>
      <div className='count__controls'>
        <CountUp countUp={countUp} id={id} />
        <CountDown countDown={countDown} id={id} />
      </div>
    </div>
  );
};

export default Count;
