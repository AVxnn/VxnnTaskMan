
const numberOfDay = (time) => {
  const date1 = new Date(time);
  const date2 = new Date();

  const oneDay = 1000 * 60 * 60 * 24;

  const diffInTime = date2.getTime() - date1.getTime();

  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}

export default numberOfDay