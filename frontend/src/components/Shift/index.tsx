import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Shift as ShiftType } from '../../lib/types';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const Shift: React.FC<{
  readonly shift: ShiftType
}> = ({
  shift
}) => {
  const {dateOfDay, date,startTime, endTime, careType, salary, hospital, starRate, street, state } = shift;
  return (
    <div className='shift'>
      <div className='shift__left shift__part'>
        <p><span>{dateOfDay}</span><span>{date}</span></p>
        <p><span>{startTime}</span><span>{endTime}</span></p>
        <p>{careType}</p>
        <p>{salary} h/r</p>
      </div>
      <div className='shift__delimiter'></div>
      <div className='shift__right shift__part'>
        <p>{hospital}</p>
        <p>
          {[...Array(starRate)].map((star, index) => 
            <FontAwesomeIcon className='star' key={index} icon={faStar} />
        )}
        </p>
        <p>{street}</p>
        <p>{state}</p>
      </div>
    </div>
  )
}

export default Shift;