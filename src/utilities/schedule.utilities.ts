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
  dateEnd: string,
  actualDate: string
): {
  normalizedTotalHours: number;
  dateBeginNormalized: number;
  dateEndNormalized: number;
  beginisDayBefore: boolean;
  endIsDayAfter: boolean;
} => {
  const dateBeginObj = new Date(datebegin);
  const dateEndObj = new Date(dateEnd);
  const actualDateObj = new Date(formatQueryDateIntoDateFormat(actualDate));

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

  const acualDateWhitoutTime = new Date(
    actualDateObj.getFullYear(),
    actualDateObj.getMonth(),
    actualDateObj.getDate()
  );

  dateBeginWithoutTime.setHours(0, 0, 0, 0);
  dateEndWithoutTime.setHours(0, 0, 0, 0);
  acualDateWhitoutTime.setHours(0, 0, 0, 0);

  const beginisDayBefore =
    dateEndWithoutTime > dateBeginWithoutTime &&
    dateBeginWithoutTime < acualDateWhitoutTime;

  const endIsDayAfter =
    dateBeginWithoutTime < dateEndWithoutTime &&
    dateEndWithoutTime > acualDateWhitoutTime;

  let dateBeginHour = dateBeginObj.getHours();
  let dateEndHour = dateEndObj.getHours();
  let dateBeginMinutes = dateBeginObj.getMinutes();
  let dateEndMinutes = dateEndObj.getMinutes();

  if (beginisDayBefore) {
    dateBeginHour = 0;
    dateBeginMinutes = 0;
  }

  if (endIsDayAfter) {
    dateEndHour = 23;
    dateEndMinutes = 59;
  }

  const dateBeginNormalized = (dateBeginHour * 60 + dateBeginMinutes) / 60;
  const dateEndNormalized = (dateEndHour * 60 + dateEndMinutes) / 60;

  const normalizedTotalHours = dateEndNormalized - dateBeginNormalized;

  /*if (beginisDayBefore) {
    normalizedTotalHours += 24;
  }*/
  return {
    normalizedTotalHours,
    dateBeginNormalized,
    dateEndNormalized,
    beginisDayBefore,
    endIsDayAfter,
  };
};
//'2024/06/20 04:00:00'
export const formatQueryDateIntoDateFormat = (dateString: string): string => {
  const year = dateString.substring(0, 4);
  const month = dateString.substring(4, 6);
  const day = dateString.substring(6, 8);
  const hour = dateString.substring(8, 10);
  const minute = dateString.substring(10, 12);
  const second = dateString.substring(12, 14);

  const formattedDate = `${year}/${month}/${day} ${hour}:${minute}:${second}`;
  return formattedDate;
};

export const calculateTodayDateBarLeftPosition = (): string => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const totalMinutes = hours * 60 + minutes;
  const fractionOfDay = totalMinutes / (24 * 60);
  const position = fractionOfDay * 100;
  return `${position}%`;
};

export const getDataFromDateObject = (
  date: Date
): {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
} => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return { year, month, day, hours, minutes };
};

export const formatDateObjIntoDateForRequest = (
  date: Date,
  isEnd: boolean
): string => {
  const { year, month, day } = getDataFromDateObject(date);
  const formattedDate = `${year}${month + 1 < 10 ? `0${month + 1}` : month}${
    day < 10 ? `0${day}` : day
  }${isEnd ? "235959" : "000000"}`;
  return formattedDate;
};
