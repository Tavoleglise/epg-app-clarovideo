import React from "react";
import { Select, SelectItem, DatePicker } from "@nextui-org/react";
import { countries } from "../../utilities";
import { searchConfiguration } from "../../models";
import { dateToParamDateAdapter } from "../../utilities";

interface ControlsProps {
  setSearchConfiguration: (searchConfiguration: searchConfiguration) => void;
  searchConfiguration: searchConfiguration;
}

const Controls: React.FC<ControlsProps> = ({
  setSearchConfiguration,
  searchConfiguration,
}) => {
  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchConfiguration({ ...searchConfiguration, region: e.target.value });
  };
  const handleDateChange = (dateValue: any) => {
    setSearchConfiguration({
      ...searchConfiguration,
      beginDate: dateToParamDateAdapter(
        dateValue.day,
        dateValue.month,
        dateValue.year,
        true
      ),
      endDate: dateToParamDateAdapter(
        dateValue.day,
        dateValue.month,
        dateValue.year,
        false
      ),
    });
  };
  return (
    <div className="flex h-full justify-between items-center px-16 text-gray-200">
      <div className="text-xl font-bold">{searchConfiguration.beginDate}</div>
      <div className="flex justify-end items-center w-1/2">
        <div className="mx-16">
          <DatePicker
            label="Birth date"
            className="max-w-[284px]"
            variant="underlined"
            onChange={(dateValue) => {
              handleDateChange(dateValue);
            }}
          />
        </div>
        <Select
          label="Select your region"
          size="sm"
          className="max-w-xs"
          variant="underlined"
          onChange={(e) => handleRegionChange(e)}
        >
          {countries.map((country) => (
            <SelectItem key={country.key}>{country.label}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default Controls;
