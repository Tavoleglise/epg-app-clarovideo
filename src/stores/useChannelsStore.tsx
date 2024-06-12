import create from "zustand";
import { Channel, ChannelsState } from "../models/channels.models";
import { getFromStorage, setToStorage } from "../utilities";

const useChannelsStore = create<ChannelsState>((set) => ({
  channels: getFromStorage("channels", "local", {
    channels: [],
  }),

  setChannels: (channels: Channel[]) =>
    set(() => {
      return { channels: setToStorage("channels", channels, "local") };
    }),
}));

export default useChannelsStore;
