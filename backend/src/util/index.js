// Get another date according to the given date,  calculating depends on date to move forward or backward.
const computeDate = (startDate, direction) => {
  let date = new Date(startDate);
  date.setDate(date.getDate() + direction*7);
  let y = date.getFullYear();
  let m = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  let d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  return y + "-" + m + "-" + d;
};

// Get two shifts sets based on invited or not between given two dates.
const getShiftsByInVited = (minDate, maxDate, shifts) =>{
  // Get shifts set between given two dates.
  const oneWeekShifts = shifts.filter(shift => {
    let date = new Date(shift.date).toISOString().substring(0, 10);
    return (minDate <= date && date < maxDate);
  })
  
  // Get shifts sets based on isInvited status.
  const [invitedShifts, uninvitedShifts] = oneWeekShifts.reduce((result, shift) => {
    result[shift.isInvited ? 0 : 1].push(shift); 
    return result;
  },
  [[], []]);

  return {invitedShifts, uninvitedShifts}
}

module.exports = {
  computeDate,
  getShiftsByInVited
}