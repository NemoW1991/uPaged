const shifts = require('../dataStore/shifts.json');
const computeDate = require('../util');

exports.index = async (req, res) => {
  const {date, days} = req.query;

  const startDate = new Date(date).toISOString().substring(0, 10);

  // Determine whether the data is out of the bounds, if yes, respond 404 and message.
  if(startDate > shifts[shifts.length-1].date && days > 0 || startDate < shifts[0].date && days < 0) {
    res.status(404).json({
      message: 'No more shifts.'
    });
    return;
  }

  // Get the endDate based on startDate and days (forward or backward)
  const endDate =  computeDate(startDate, days);

  // Determine minDate and maxDate
  let minDate, maxDate;
  if(days > 0) {
    minDate = startDate,
    maxDate = endDate; 
  } else {
    minDate = endDate;
    maxDate = startDate;
  }

  // Get all Data between the two date
  const result = shifts.filter(shift => {
    var date = new Date(shift.date).toISOString().substring(0, 10);
    return (minDate < date && date < maxDate);
  });

  res.status(200).json(result);
}