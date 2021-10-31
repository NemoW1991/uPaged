const shifts = require('../dataStore/shifts.json');
const computeDate = require('../util');

exports.index = async (req, res) => {
  const {date, days} = req.query;

  try{
    let startDate;
    if(date == ''){
      startDate = shifts[0].date;
    } else {
      startDate = new Date(date).toISOString().substring(0, 10);
    }

    // Determine whether the data is out of the bounds, if yes, respond status 404 and message.
    if(startDate > shifts[shifts.length-1].date && days > 0 || startDate < shifts[0].date && days < 0) {
      res.status(404).json({
        message: 'No more shifts.'
      });
      return;
    }

    // Get the endDate based on startDate and days (forward or backward)
    const endDateOne = computeDate(startDate, days);
    const endDateTwo = computeDate(endDateOne, days);

    // Determine minDate and maxDate
    let minDate, maxDate;
    if(days > 0) {
      minDate = startDate,
      maxDate = endDateTwo; 
    } else {
      minDate = endDateTwo;
      maxDate = startDate;
    }

    // Get all shifts information between these two dates
    const shiftsOne = shifts.filter(shift => {
      let date = new Date(shift.date).toISOString().substring(0, 10);
      return (minDate < date && date <= endDateOne);
    });

    const resultOne = shiftsOne.filter(shift => shift.isInvited === true);
    const resultTwo = shiftsOne.filter(shift => shift.isInvited === false)

    const shiftsTwo = shifts.filter(shift => {
      let date = new Date(shift.date).toISOString().substring(0, 10);
      return (endDateOne < date && date <= maxDate);
    });

    const resultThree = shiftsTwo.filter(shift => shift.isInvited === true);
    const resultFour = shiftsTwo.filter(shift => shift.isInvited === false)

    const result = [];
    result.push({"start": minDate});
    result.push({"end": endDateOne});
    result.push(resultOne);
    result.push(resultTwo);
    result.push(resultThree);
    result.push(resultFour);

    res.status(200).json(result);
  } catch(err) {
    console.log(err)
  }
}