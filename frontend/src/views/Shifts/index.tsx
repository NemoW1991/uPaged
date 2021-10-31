import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from '../../store';
import { getShifts } from '../../store/effects/Shift';
import Shift from '../../components/Shift';
import Button from '../../components/Button';
import {Shift as ShiftType} from '../../lib/types';
import DateSelect from '../../components/DateSelect';
import './index.scss';

const Shifts: React.FC = () => {

  const {count} = useSelector((state: AppState) => state.count)
  const {
    start,
    shiftsOneInvited, 
    shiftsOneUninvited,
    shiftsTwoInvited,
    shiftsTwoUninvited
  } = useSelector((state: AppState) => state.shifts);
  const dispatch = useDispatch();
  const [invitedShifts, setInvitedShifts] = useState<ShiftType[]>([]);
  const [uninvitedShifts, setUninvitedShifts] = useState<ShiftType[]>([]);

  useEffect(() => {
    dispatch(getShifts())
  }, [dispatch]);

  useEffect(() => {
    console.log(start)
    if(count === 0) {
      setInvitedShifts(shiftsOneInvited);
      setUninvitedShifts(shiftsOneUninvited)
    } else {
      setInvitedShifts(shiftsTwoInvited);
      setUninvitedShifts(shiftsTwoUninvited)
    }
  }, [count,shiftsOneInvited,shiftsOneUninvited,shiftsTwoInvited,shiftsTwoUninvited]);


  return (
    <section className='shifts'>
      <h1>Shifts</h1>
      <h2>you've been invited</h2>

      {/* Invited Shifts Item */}
      {invitedShifts.map((shift)=>
        <div className='shifts__item' key={shift.id}>
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
      {uninvitedShifts.map((shift)=>
        <div className='shifts__item' key={shift.id}>
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