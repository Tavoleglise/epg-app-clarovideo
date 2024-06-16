import React, { useState, useRef, useEffect } from "react";
import useChannels from "../../hooks/useChannels.tsx";
// import { getCurrentTime } from "../../utilities";
import { Spinner } from "@nextui-org/react";
import { Event } from "../../models";

//components
import EventsTable from "./eventsTable/EventsTable";
import ChannelInformationTable from "./channelInformationTable/ChannelInformationTable.tsx";
import { searchConfiguration } from "../../models";

interface ScheduleProps {
  handleEventSelection: (event: Event) => void;
  searchConfiguration: searchConfiguration;
}

const Schedule: React.FC<ScheduleProps> = ({
  handleEventSelection,
  searchConfiguration,
}) => {
  // const actualTime = getCurrentTime();
  // const hourWidth = 100;
  const [numberOfChannels, setNumberOfChannels] = useState(20);
  const { channels, loading } = useChannels({
    numberOfChannels,
    searchConfiguration,
  });
  const channelsScheduleRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    // Paso 2
    const channelsSchedule = channelsScheduleRef.current;
    if (!channelsSchedule) return;

    const isAtBottom =
      channelsSchedule.scrollHeight - channelsSchedule.scrollTop ===
      channelsSchedule.clientHeight;

    if (isAtBottom) {
      setNumberOfChannels((prev) => prev + 20);
    }
  };

  useEffect(() => {
    const channelsSchedule = channelsScheduleRef.current;
    if (channelsSchedule) {
      channelsSchedule.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (channelsSchedule) {
        channelsSchedule.removeEventListener("scroll", handleScroll);
      }
    };
  });

  if (!channels || (channels && channels?.length === 0) || loading)
    return (
      <div className="h-full flex justify-center items-center">
        <Spinner color="primary" />
      </div>
    );
  if (channels && channels.length > 0) {
    return (
      <>
        <div
          ref={channelsScheduleRef}
          className="h-full w-full flex overflow-x-scroll overflow-y-scroll relative z-10"
        >
          <ChannelInformationTable channels={channels} />
          <EventsTable
            channels={channels}
            handleEventSelection={handleEventSelection}
          />
        </div>
      </>
    );
  }
};

export default Schedule;
