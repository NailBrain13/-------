import CountDown from '../Buttons/Delete';
import CountUp from '../Buttons/Up';
import './style.scss';

const Count = () => {
  return (
    <div class='count'>
      <div class='count__box'>
        <input type='number' class='count__input' min='1' max='100' value='1' />
      </div>
      <div class='count__controls'>
        <CountUp />
        <CountDown />
      </div>
    </div>
  );
};

export default Count;
