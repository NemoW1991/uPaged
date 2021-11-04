const shifts = require('../dataStore/shifts.json');
const {computeDate, getShiftsByInVited} = require('../util');

exports.index = async (req, res) => {
  let {date, direction} = req.query;

  try{
    let startDate;
    // Determine the startDate as base date.
    if(date == ''){
      startDate = shifts[0].date;
      direction = 1;
    } else {
      startDate = computeDate(date, direction);
    }

    // Determine whether the data is out of the bounds, if yes, respond status 404 and message.
    if(startDate > shifts[shifts.length-1].date && direction > 0 || startDate < shifts[0].date && direction < 0) {
      res.status(404).json({
        message: 'No more shifts.'
      });
      return;
    }

    // Get the endDates based on startDate and direction mark (forward or backward)
    const endDateOne = computeDate(startDate, direction);
    const endDateTwo = computeDate(endDateOne, direction);

    // Determine minDate and maxDate
    let minDate, maxDate;
    if(direction > 0) {
      minDate = startDate,
      maxDate = endDateTwo; 
    } else {
      minDate = endDateTwo;
      maxDate = startDate;
    }

    // Get invited and uninvited shifts information between these two dates
    const shiftsOne = getShiftsByInVited(minDate, endDateOne, shifts)
    const shiftsTwo =  getShiftsByInVited(endDateOne, maxDate, shifts)

    const result = [];
    result.push({"startDateOne": minDate});
    result.push({"startDateTwo": endDateOne});
    result.push(shiftsOne);
    result.push(shiftsTwo);

    res.status(200).json(result);
  } catch(err) {
    console.log(err)
  }
}