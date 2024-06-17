import React, { useState, useEffect } from "react";
import Schedule from "../schedule/Schedule";
import EventInformation from "../eventInformation/EventInformation";
import Controls from "../controls/Controls";
import { Event } from "../../models";
import ScheduleState from "../../stores/useScheduleStore";

const ProgrammingGuide: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const setCurrentDate = ScheduleState((state) => state.setCurrentDate);

  const handleEventSelection = (event: Event) => {
    setSelectedEvent(event);
  };

  useEffect(() => {
    const updatingCurrentDateInterval = setInterval(() => {
      setCurrentDate(new Date());
    }, 600000);
    return () => clearInterval(updatingCurrentDateInterval);
  }, []);

  return (
    <div className="h-full bg-gradient-to-r from-gray-800 to-black">
      <div className="h-1/2 sm:h-1/3 flex flex-col justify-center">
        <div className="h-4/6 sm:h-4/6 overflow-y-auto">
          <EventInformation event={selectedEvent} />
        </div>
        <div className="h-2/6 sm:h-2/6 py-2 overflow-y-auto">
          <Controls />
        </div>
      </div>
      <div className="h-1/2 sm:h-2/3">
        <Schedule handleEventSelection={handleEventSelection} />
      </div>
    </div>
  );
};

export default ProgrammingGuide;
