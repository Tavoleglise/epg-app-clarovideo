import React from "react";
import { parseDateString } from "../../../utilities";
import { monthsNames } from "../../../utilities";

interface FormatedTimeAndDateProps {
  date: string | undefined;
  style?: string;
}

const FormatedTimeAndDate: React.FC<FormatedTimeAndDateProps> = ({
  date,
  style,
}) => {
  if (!date) return <div className={style}>Date not available</div>;
  const parsedDate = parseDateString(date);
  console.log(parsedDate);
  const { month, day, hour, minute } = parsedDate;
  const monthName = monthsNames[month - 1];
  return (
    <span className={style}>
      {hour < 10 ? `0${hour}` : hour}:{minute < 10 ? `0${minute}` : minute} |{" "}
      {monthName.slice(0, 3)} {day}
    </span>
  );
};

export default FormatedTimeAndDate;
