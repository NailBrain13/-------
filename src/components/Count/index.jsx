import CountDown from '../Buttons/Down';
import CountUp from '../Buttons/Up';
import './style.scss';

const Count = () => {
  return (
    <div className='count'>
      <div className='count__box'>
        <input
          type='number'
          className='count__input'
          min='1'
          max='100'
          value='1'
        />
      </div>
      <div className='count__controls'>
        <CountUp />
        <CountDown />
      </div>
    </div>
  );
};

export default Count;
