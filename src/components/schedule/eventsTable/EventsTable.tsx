import React from "react";
import { Channel, Event } from "../../../models";

// components
import ChannelSchedule from "../channelSchedule/ChannelSchedule";
// import TimeEventIndicators from "../timeEventIndicators/TimeEventIndicators";

interface EventsTableProps {
  channels: Channel[];
  handleEventSelection: (event: Event) => void;
}

const EventsTable: React.FC<EventsTableProps> = ({
  channels,
  handleEventSelection,
}) => {
  return (
    <div>
      <div>
        {channels.map((channel: Channel) => {
          return (
            <ChannelSchedule
              channel={channel}
              handleEventSelection={handleEventSelection}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EventsTable;
