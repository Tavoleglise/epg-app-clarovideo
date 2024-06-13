import React, { useEffect } from "react";
import { Channel } from "../../../models";

//components
import EventCard from "../event/Event";
import ChannelHead from "../channelHead/ChannelHead";

interface ChannelScheduleProps {
  channel: Channel;
}
const ChannelSchedule: React.FC<ChannelScheduleProps> = ({ channel }) => {
  useEffect(() => {
    console.log(channel);
  }, []);
  return (
    <div className="flex">
      <ChannelHead channel={channel} />
      <div className="flex">
        {channel.events?.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
    </div>
  );
};

export default ChannelSchedule;
