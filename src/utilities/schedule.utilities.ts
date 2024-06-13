export const getCurrentTime = (): { hour: number; minutes: number } => {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();

  return { hour, minutes };
};

export const formatFullDateIntoTime = (date: string): string => {
  const dateObj = new Date(date);
  const hour = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${formattedHour}:${formattedMinutes}`;
};
