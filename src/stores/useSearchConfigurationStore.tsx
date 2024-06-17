import create from "zustand";
import { SearchConfiguration, SearchConfigurationState } from "../models";
import {
  getFromStorage,
  setToStorage,
  dateToParamDateAdapter,
} from "../utilities";

const today = new Date();

const useSearchConfigurationStore = create<SearchConfigurationState>((set) => ({
  searchConfiguration: getFromStorage("searchConfiguration", "local", {
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
  }),

  setSearchConfiguration: (searchConfiguration: SearchConfiguration) =>
    set(() => {
      return {
        searchConfiguration: setToStorage(
          "searchConfiguration",
          searchConfiguration,
          "local"
        ),
      };
    }),
}));

export default useSearchConfigurationStore;
