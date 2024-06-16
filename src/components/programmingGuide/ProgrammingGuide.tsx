import React, { useState } from "react";
import Schedule from "../schedule/Schedule";
import EventInformation from "../eventInformation/EventInformation";
import Controls from "../controls/Controls";
import { Event } from "../../models";

const ProgrammingGuide: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [endDate] = useState("20200813240000");
  const [beginDate] = useState("20200813000000");
  const [region] = useState("colombia");
  const [searchConfiguration] = useState({});

  const handleEventSelection = (event: Event) => {
    setSelectedEvent(event);
  };
  return (
    <div className="h-full bg-gradient-to-r from-gray-800 to-black">
      <div className="h-1/3">
        <div className="h-5/6">
          <EventInformation event={selectedEvent} />
        </div>
        <div className="h-1/6">
          <Controls />
        </div>
      </div>
      <div className="h-2/3">
        <Schedule
          handleEventSelection={handleEventSelection}
          beginDate={beginDate}
          endDate={endDate}
          region={region}
        />
      </div>
    </div>
  );
};

export default ProgrammingGuide;
