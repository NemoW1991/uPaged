import React from 'react';
import './index.scss';

const DateSelect: React.FC = () => {
  const handleClick = (direction: string) => {

  };
  return (
    <div className='date-select'>
      <button className='button' onClick={() => handleClick('backward')}> &lt; </button>
      <span>21</span>
      <span>-</span>
      <span>28</span>
      <span>Apr</span>
      <span>2019</span>
      <button className='button' onClick={() => handleClick('forward')}>&gt;</button>
    </div>
  )
}

export default DateSelect;