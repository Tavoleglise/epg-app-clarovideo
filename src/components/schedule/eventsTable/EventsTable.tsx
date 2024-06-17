import React from "react";
import { Channel, Event } from "../../../models";
import { calculateTodayDateBarLeftPosition } from "../../../utilities";

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
      <div data-testid="channelScheduleContainer" className="relative">
        <div
          style={{ left: calculateTodayDateBarLeftPosition() }}
          className="absolute z-10 top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-yellow-400"
        ></div>
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
