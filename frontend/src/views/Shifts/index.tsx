import React from 'react';
import Shift from '../../components/Shift';
import Button from '../../components/Button';
import {Shifts as ShiftsData} from '../../lib/constants';
import DateSelect from '../../components/DateSelect';
import './index.scss';

const Shifts: React.FC = () => {
  return (
    <section className='shifts'>
      <h1>Shifts</h1>
      <h2>you've been invited</h2>

      {/* Invited Shifts Item */}
      {ShiftsData.map((shift)=>
        <div className='shifts__item'>
          <div className='shifts__item-side shifts__item--green'></div>
          <Shift key={shift.id} shift={shift} />
          <div className='shifts__item-console'>
            <Button buttonText='decline' hollow={true} />
            <Button buttonText='apply' />
          </div>
        </div>
      )}

      <DateSelect />
      
      {/* Shifts Item */}
      {ShiftsData.map((shift)=>
        <div className='shifts__item'>
          <div className='shifts__item-side shifts__item--blue'></div>
          <Shift key={shift.id} shift={shift} />
          <div className='shifts__item-console'>
            <Button buttonText='apply' />
          </div>
        </div>
      )}
      
    </section>
  )
}

export default Shifts;