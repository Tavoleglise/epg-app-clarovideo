import React from "react";
import { Channel } from "../../../models";

// components
import ChannelSchedule from "../channelSchedule/ChannelSchedule";

interface EventsTableProps {
  channels: Channel[];
}

const EventsTable: React.FC<EventsTableProps> = ({ channels }) => {
  return (
    <div>
      {channels.map((channel: Channel) => {
        return <ChannelSchedule channel={channel} />;
      })}
    </div>
  );
};

export default EventsTable;
