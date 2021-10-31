export function getYear (date: string): number {
  const startDate = new Date(date);
  const yy = startDate.getFullYear();
  return yy;
}

export function getLastMonth (date: string): string {
  const startDate = new Date(date);
  startDate.setDate(startDate.getDate() + 7);
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const mm = month[startDate.getMonth()]
  return mm;
}

export function getDate (date: string):number {
  const startDate = new Date(date);
  const dd = startDate.getDate();
  return dd;
}

export function getlastDate (date: string) {
  let startDate = new Date(date);
  startDate.setDate(startDate.getDate() + 7);
  const ed = startDate.getDate() < 10 ? "0" + startDate.getDate() : startDate.getDate();
  return ed;
};