import create from "zustand";
import { SearchConfiguration, SearchConfigurationState } from "../models";
import { getFromStorage, setToStorage } from "../utilities";

const useSearchConfigurationStore = create<SearchConfigurationState>((set) => ({
  searchConfiguration: getFromStorage("searchConfiguration", "local", {
    beginDate: "20200813000000",
    endDate: "20200813240000",
    region: "colombia",
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
