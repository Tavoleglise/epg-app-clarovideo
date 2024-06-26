import React, { useEffect } from "react";
import { Select, SelectItem, DatePicker, Button } from "@nextui-org/react";
import {
  countries,
  formatQueryDateIntoDateFormat,
  dateToParamDateAdapter,
} from "../../utilities";
import useSearchConfigurationStore from "../../stores/useSearchConfigurationStore";
import { getFromStorage } from "../../utilities";
import FormatedDate from "../commons/formatedDate/FormatedDate";

const Controls: React.FC = () => {
  const searchConfiguration = useSearchConfigurationStore(
    (state) => state.searchConfiguration
  );
  const setSearchConfiguration = useSearchConfigurationStore(
    (state) => state.setSearchConfiguration
  );
  const today = new Date();

  useEffect(() => {
    setStorageConfiguration();
  }, []);

  const setStorageConfiguration = () => {
    const configurationFRomStorage = getFromStorage(
      "searchConfiguration",
      "local",
      false
    );
    if (configurationFRomStorage) {
      setSearchConfiguration(configurationFRomStorage);
    } else {
      setSearchConfiguration({
        beginDate: dateToParamDateAdapter(
          today.getDate(),
          today.getMonth() + 1,
          today.getFullYear(),
          true
        ),
        endDate: dateToParamDateAdapter(
          today.getDate(),
          today.getMonth() + 1,
          today.getFullYear(),
          false
        ),
        region: "mexico",
      });
    }
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchConfiguration({ ...searchConfiguration, region: e.target.value });
  };
  // eslint-disable-next-line
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

  const handleReturnToToday = () => {
    setSearchConfiguration({
      ...searchConfiguration,
      beginDate: dateToParamDateAdapter(
        today.getDate(),
        today.getMonth() + 1,
        today.getFullYear(),
        true
      ),
      endDate: dateToParamDateAdapter(
        today.getDate(),
        today.getMonth() + 1,
        today.getFullYear(),
        false
      ),
    });
  };

  return (
    <div className="box-content flex flex-col-reverse h-full justify-center items-center py-16 sm:py-0 sm:px-16 text-gray-200 sm:flex-row sm:justify-between">
      <div className="text-xl font-bold flex mt-4 justify-between items-centar sm:justify-center">
        <FormatedDate
          date={formatQueryDateIntoDateFormat(searchConfiguration.beginDate)}
        />
        <div className="ml-4">
          <Button onClick={handleReturnToToday}>Return to today</Button>
        </div>
      </div>
      <div className=" flex justify-end items-center w-full flex-col px-4 sm:w-1/2 sm:flex-row sm:px-0">
        <DatePicker
          data-testid="date-picker"
          label="Birth date"
          className="w-full sm:max-w-xs"
          variant="bordered"
          onChange={(dateValue) => {
            handleDateChange(dateValue);
          }}
        />
        <Select
          data-testid="select"
          label="Select your region"
          size="sm"
          className="w-full mt-4 sm:max-w-xs sm:ml-4 sm:mt-0"
          variant="bordered"
          onChange={(e) => handleRegionChange(e)}
          defaultSelectedKeys={[searchConfiguration.region]}
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
