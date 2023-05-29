export const formatTime = (milliseconds: number) => {
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
  const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

  const formattedTime = [];

  if (hours > 0) {
    formattedTime.push(`${hours}h`);
  }
  if (minutes > 0) {
    formattedTime.push(`${minutes}m`);
  }
  if (seconds > 0) {
    formattedTime.push(`${seconds}s`);
  }

  return formattedTime.join(' ');
};
