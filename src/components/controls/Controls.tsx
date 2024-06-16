import React from "react";
import { Select, SelectItem, DatePicker } from "@nextui-org/react";
import { countries } from "../../utilities";

const Controls: React.FC = () => {
  return (
    <div className="flex h-full justify-between items-center px-16 text-gray-200">
      <div className="text-xl font-bold">Today</div>
      <div className="flex justify-end items-center w-1/2">
        <div className="mx-16">
          <DatePicker label="Birth date" className="max-w-[284px]" />
        </div>
        <Select label="Select your region" size="sm" className="max-w-xs">
          {countries.map((country) => (
            <SelectItem key={country.key}>{country.label}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default Controls;
