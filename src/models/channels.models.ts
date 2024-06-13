export interface Channel {
  id: number;
  number: number;
  name: string;
  hd: boolean;
  image: string;
  events: Event[];
}

export interface Event {
  id: number;
  channelId: number;
  name: string;
  description: string | null;
  dateBegin: string;
  dateEnd: string;
}

export interface ChannelsState {
  channels: Channel[];
  setChannels: (channels: Channel[]) => void;
}
