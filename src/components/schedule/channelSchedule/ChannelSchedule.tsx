import React, { useEffect } from "react";
import { Channel, Event } from "../../../models";

//components
import EventCard from "../eventCard/EventCard";

interface ChannelScheduleProps {
  channel: Channel;
  handleEventSelection: (event: Event) => void;
}
const ChannelSchedule: React.FC<ChannelScheduleProps> = ({
  channel,
  handleEventSelection,
}) => {
  useEffect(() => {
    console.log(channel);
  }, []);
  return (
    <div className="flex">
      {channel.events?.map((event) => (
        <EventCard event={event} handleEventSelection={handleEventSelection} />
      ))}
    </div>
  );
};

export default ChannelSchedule;
