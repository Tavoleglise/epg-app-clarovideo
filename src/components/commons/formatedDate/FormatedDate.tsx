import React from "react";
import { parseDateString } from "../../../utilities";
import { monthsNames } from "../../../utilities";
import useScheduleStore from "../../../stores/useScheduleStore";
import { getDataFromDateObject } from "../../../utilities";

interface FormatedDateProps {
  date: string | undefined;
  style?: string;
}

const FormatedDate: React.FC<FormatedDateProps> = ({ date, style }) => {
  const currentDate = useScheduleStore((state) => state.currentDate);
  const currentDateData = getDataFromDateObject(currentDate);
  if (!date) return <div className={style}>Date not available</div>;
  const parsedDate = parseDateString(date);
  const { month, day, year } = parsedDate;
  const monthName = monthsNames[month - 1];

  console.log(currentDateData, parsedDate);

  if (
    currentDateData.month + 1 === month &&
    currentDateData.day === day &&
    currentDateData.year === year
  ) {
    return <span className={style}>Today</span>;
  }
  return (
    <span className={style}>
      {monthName?.slice(0, 3)} {day} {year}
    </span>
  );
};

export default FormatedDate;
