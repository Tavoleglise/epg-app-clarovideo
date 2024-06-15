import React, { useState } from "react";
import useChannels from "../../hooks/useChannels.tsx";
// import { getCurrentTime } from "../../utilities";
import { Spinner } from "@nextui-org/react";
import { Event } from "../../models";

//components
import EventsTable from "./eventsTable/EventsTable";
import ChannelInformationTable from "./channelInformationTable/ChannelInformationTable.tsx";

interface ScheduleProps {
  handleEventSelection: (event: Event) => void;
}

const Schedule: React.FC<ScheduleProps> = ({ handleEventSelection }) => {
  // const actualTime = getCurrentTime();
  // const hourWidth = 100;
  const [numberOfChannels] = useState(30);
  const [endDate] = useState("20200813240000");
  const [beginDate] = useState("20200813000000");
  const [region] = useState("colombia");
  const { channels, loading } = useChannels({
    numberOfChannels,
    endDate,
    beginDate,
    region,
  });
  if (!channels || (channels && channels?.length === 0) || loading)
    return (
      <div className="h-2/3 flex justify-center items-center">
        <Spinner color="primary" />
      </div>
    );
  if (channels && channels.length > 0) {
    return (
      <div className="h-full flex overflow-x-scroll overflow-y-scroll relative z-10">
        <ChannelInformationTable channels={channels} />
        <EventsTable
          channels={channels}
          handleEventSelection={handleEventSelection}
        />
      </div>
    );
  }
};

export default Schedule;
