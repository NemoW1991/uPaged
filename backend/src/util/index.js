// Get another date according to the given date,  calculating depends on date to move forward or backward.

module.exports = (startDate, days) => {
  var dd = new Date(startDate);
  dd.setDate(dd.getDate() + days);
  var y = dd.getFullYear();
  var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
  var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
  return y + "-" + m + "-" + d;
};