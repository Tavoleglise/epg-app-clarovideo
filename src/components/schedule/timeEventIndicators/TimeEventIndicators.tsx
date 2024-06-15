import React from "react";

// components
import FormatedTime from "../../commons/formatedTime/FormatedTime";

const TimeEventIndicators: React.FC = () => {
  return (
    <div className="flex fixed">
      {Array.from({ length: 24 }).map((_, index) => (
        <div className="w-64 text-gray-300 pl-4" key={index}>
          <FormatedTime hours={index} minutes={0} />
        </div>
      ))}
    </div>
  );
};

export default TimeEventIndicators;
