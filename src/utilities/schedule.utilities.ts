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

export const calculateEventNormalizedTime = (
  datebegin: string,
  dateEnd: string
): {
  normalizedTotalHours: number;
  dateBeginNormalized: number;
  dateEndNormalized: number;
} => {
  const dateBeginObj = new Date(datebegin);
  const dateEndObj = new Date(dateEnd);

  const dateBeginHour = dateBeginObj.getHours();
  const dateEndHour = dateEndObj.getHours();
  const dateBeginMinutes = dateBeginObj.getMinutes();
  const dateEndMinutes = dateEndObj.getMinutes();

  const dateBeginNormalized = (dateBeginHour * 60 + dateBeginMinutes) / 60;
  const dateEndNormalized = (dateEndHour * 60 + dateEndMinutes) / 60;

  let normalizedTotalHours = dateEndNormalized - dateBeginNormalized;

  const dateBeginWithoutTime = new Date(
    dateBeginObj.getFullYear(),
    dateBeginObj.getMonth(),
    dateBeginObj.getDate()
  );
  const dateEndWithoutTime = new Date(
    dateEndObj.getFullYear(),
    dateEndObj.getMonth(),
    dateEndObj.getDate()
  );

  const beginisDayBefore = dateBeginWithoutTime < dateEndWithoutTime;

  if (beginisDayBefore) {
    normalizedTotalHours += 24;
  }
  return { normalizedTotalHours, dateBeginNormalized, dateEndNormalized };
};
