export interface Channel {
  id: number;
  number: number;
  name: string;
  hd: boolean;
  image: string;
}

export interface ChannelsState {
  channels: Channel[];
  setChannels: (channels: Channel[]) => void;
}
