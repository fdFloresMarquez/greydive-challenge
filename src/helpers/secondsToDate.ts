export const secondsToDate = (seconds: number) => {
  const time = new Date(1970, 0, 1); // Epoch

  time.setSeconds(seconds);

  return time.toLocaleDateString();
};
