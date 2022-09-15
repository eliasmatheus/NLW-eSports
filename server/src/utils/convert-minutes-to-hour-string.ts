// 18:00 -> 1000

function pad(number: number) {
  return String(number).padStart(2, '0');
}

export function convertMinutesToHourString(minutesAmount: number) {
  const hours = Math.floor(minutesAmount / 60);
  const minutes = minutesAmount % 60;

  return `${pad(hours)}:${pad(minutes)}`;
}
