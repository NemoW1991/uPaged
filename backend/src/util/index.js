// Get another date according to the given date,  calculating depends on date to move forward or backward.

module.exports = (startDate, days) => {
  let date = new Date(startDate);
  date.setDate(date.getDate() + days*7);
  let y = date.getFullYear();
  let m = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  let d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  return y + "-" + m + "-" + d;
};