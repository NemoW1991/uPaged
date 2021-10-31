import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from '../../store';
import { getShifts } from '../../store/effects/Shift';
import {setCountAction} from '../../store/actions/CountAction';
import {getYear, getLastMonth, getDate, getlastDate} from '../../lib/util';
import './index.scss';

const DateSelect: React.FC = () => {
  const {count} = useSelector((state: AppState) => state.count);
  const {start, end} = useSelector((state: AppState) => state.shifts);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState<string>('');

  useEffect(() => {
    if(count === 0) {
      setStartDate(start);
      const date = getlastDate(start);
    }  else {
      setStartDate(end);
    }   
  }, [count,start,end]);

  const handleClick = (direction: number) => {
    
    let index = count + direction;
    if(index>1 || index<0) {
      direction > 0 ? dispatch(getShifts(end, direction)) : dispatch(getShifts(start, direction)) 
    } else {
      dispatch(setCountAction(index))
    }
  };
  return (
    <div className='date-select'>
      <button className='button' onClick={() => handleClick(-1)}> &lt; </button>
      <span>{getDate(startDate)>10?getDate(startDate):'0'+getDate(startDate)}</span>
      <span>-</span>
      <span>{getlastDate(startDate)}</span>
      <span>{getLastMonth(startDate)}</span>
      <span>{getYear(startDate)}</span>
      <button className='button' onClick={() => handleClick(1)}>&gt;</button>
    </div>
  )
}

export default DateSelect;