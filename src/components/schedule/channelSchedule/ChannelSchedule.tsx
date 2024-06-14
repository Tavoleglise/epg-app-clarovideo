import React, { useEffect } from "react";
import { Channel } from "../../../models";

//components
import EventCard from "../eventCard/EventCard";

interface ChannelScheduleProps {
  channel: Channel;
}
const ChannelSchedule: React.FC<ChannelScheduleProps> = ({ channel }) => {
  useEffect(() => {
    console.log(channel);
  }, []);
  return (
    <div className="flex">
      {channel.events?.map((event) => (
        <EventCard event={event} />
      ))}
    </div>
  );
};

export default ChannelSchedule;
