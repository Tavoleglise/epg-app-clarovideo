import React from "react";
import { Channel } from "../../../models";

// components
import ChannelSchedule from "../channelSchedule/ChannelSchedule";
// import TimeEventIndicators from "../timeEventIndicators/TimeEventIndicators";

interface EventsTableProps {
  channels: Channel[];
}

const EventsTable: React.FC<EventsTableProps> = ({ channels }) => {
  return (
    <div>
      <div>
        {channels.map((channel: Channel) => {
          return <ChannelSchedule channel={channel} />;
        })}
      </div>
    </div>
  );
};

export default EventsTable;
