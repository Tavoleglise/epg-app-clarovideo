import React from "react";
import { formatFullDateIntoTime } from "../../../utilities";

interface FormatedTimePeriodProps {
  dateBegin: string;
  dateEnd: string;
}

const FormatedTimePeriod: React.FC<FormatedTimePeriodProps> = ({
  dateBegin,
  dateEnd,
}) => {
  // Your component logic here

  return (
    <span>{`${formatFullDateIntoTime(dateBegin)} - ${formatFullDateIntoTime(
      dateEnd
    )}`}</span>
  );
};

export default FormatedTimePeriod;
