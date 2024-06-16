import create from "zustand";
import { SearchConfiguration } from "../models";
import { getFromStorage, setToStorage } from "../utilities";

const useChannelsStore = create((set) => ({
  searchConfiguration: getFromStorage("searchConfiguration", "local", {}),

  setSearchConfiguration: (searchConfiguration: SearchConfiguration[]) =>
    set(() => {
      return {
        channels: setToStorage(
          "searchConfiguration",
          searchConfiguration,
          "local"
        ),
      };
    }),
}));

export default useChannelsStore;
