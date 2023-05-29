export const generateRandomWorkoutTime = () => {
  const minutes = Math.floor(Math.random() * 91) + 30; // Random number between 30 and 120
  const seconds = Math.floor(Math.random() * 60); // Random number between 0 and 59
  const hoursPart = Math.floor(minutes / 60);
  const minutesPart = minutes % 60;
  const formattedTime = `${hoursPart}h ${minutesPart}m ${seconds}s`;
  return formattedTime;
};

export const getRandomNumber = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
