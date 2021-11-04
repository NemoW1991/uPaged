import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from '../../store';
import { getShifts } from '../../store/effects/Shift';
import {SetCountAction} from '../../store/actions/ShiftAction';
import {getYear, getLastMonth, getDate, getLastDate} from '../../lib/util';
import './index.scss';

const DateSelect: React.FC = () => {
  const {count} = useSelector((state: AppState) => state.shifts);
  const {startDateOne, startDateTwo} = useSelector((state: AppState) => state.shifts);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false); 

  useEffect(() => {
    if(count === 0) {
      setStartDate(startDateOne);
    }  else {
      setStartDate(startDateTwo);
    }   
    setIsLoading(true);
  }, [count,startDateOne,startDateTwo]);

  const handleClick = (direction: number) => {
    let index = count + direction;
    if(index>1 || index<0) {
      dispatch(getShifts(startDateTwo, direction));
      direction > 0 ?  dispatch(SetCountAction(0)) : dispatch(SetCountAction(1))
    } else {
      dispatch(SetCountAction(index))
    }
  };
  
  return (
    <div className='date-select'>
      <button className='button' onClick={() => handleClick(-1)}> &lt; </button>
      {isLoading && (
        <>
        <span>{getDate(startDate)}</span>
        <span>-</span>
        <span>{getLastDate(startDate)}</span>
        <span>{getLastMonth(startDate)}</span>
        <span>{getYear(startDate)}</span>
        </>
      )}
      <button className='button' onClick={() => handleClick(1)}>&gt;</button>
    </div>
  )
}

export default DateSelect;