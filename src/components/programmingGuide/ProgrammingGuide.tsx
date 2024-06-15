import React, { useEffect, useState } from "react";
import Schedule from "../schedule/Schedule";
import EventInformation from "../eventInformation/EventInformation";
import useChannelsStore from "../../stores/useChannelsStore";
import { Event } from "../../models";

const ProgrammingGuide: React.FC = () => {
  const channels = useChannelsStore((state) => state.channels);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleEventSelection = (event: Event) => {
    console.log(event);
    setSelectedEvent(event);
  };
  useEffect(() => {
    console.log(channels);
  }, [channels]);
  return (
    <div className="h-full bg-gradient-to-r from-gray-800 to-black">
      <div className="h-1/3">
        <EventInformation event={selectedEvent} />
      </div>
      <div className="h-2/3">
        <Schedule handleEventSelection={handleEventSelection} />
      </div>
    </div>
  );
};

export default ProgrammingGuide;
