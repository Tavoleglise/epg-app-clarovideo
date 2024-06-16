import React, { useState, useEffect } from "react";
import Schedule from "../schedule/Schedule";
import EventInformation from "../eventInformation/EventInformation";
import Controls from "../controls/Controls";
import { Event } from "../../models";
import { setToStorage } from "../../utilities";

const ProgrammingGuide: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [searchConfiguration, setSearchConfiguration] = useState({
    endDate: "20200813240000",
    beginDate: "20200813000000",
    region: "colombia",
  });

  useEffect(() => {
    setToStorage("searchConfiguration", searchConfiguration, "local");
  }, [searchConfiguration]);

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
          <Controls
            setSearchConfiguration={setSearchConfiguration}
            searchConfiguration={searchConfiguration}
          />
        </div>
      </div>
      <div className="h-2/3">
        <Schedule
          handleEventSelection={handleEventSelection}
          searchConfiguration={searchConfiguration}
        />
      </div>
    </div>
  );
};

export default ProgrammingGuide;
