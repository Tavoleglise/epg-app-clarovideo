import React, { useState, useRef, useEffect } from "react";
import useChannels from "../../hooks/useChannels.tsx";
// import { getCurrentTime } from "../../utilities";
import { Spinner } from "@nextui-org/react";
import { Event } from "../../models";
import useSearchConfigurationStore from "../../stores/useSearchConfigurationStore.tsx";

//components
import EventsTable from "./eventsTable/EventsTable";
import ChannelInformationTable from "./channelInformationTable/ChannelInformationTable.tsx";

interface ScheduleProps {
  handleEventSelection: (event: Event) => void;
}

const Schedule: React.FC<ScheduleProps> = ({ handleEventSelection }) => {
  // const actualTime = getCurrentTime();
  // const hourWidth = 100;
  const [numberOfChannels, setNumberOfChannels] = useState(20);
  const searchConfiguration = useSearchConfigurationStore(
    (state) => state.searchConfiguration
  );
  const { channels, loading } = useChannels({
    numberOfChannels,
  });
  const channelsScheduleRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const channelsSchedule = channelsScheduleRef.current;
    if (!channelsSchedule) return;

    const isAtBottom =
      Math.round(channelsSchedule.scrollHeight - channelsSchedule.scrollTop) ===
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

  useEffect(() => {
    setNumberOfChannels(20);
  }, [searchConfiguration]);

  if (!channels || (channels && channels?.length <= 0) || loading)
    return (
      <div
        data-testid="spinner"
        className="h-full flex justify-center items-center"
      >
        <Spinner color="primary" />
      </div>
    );
  if (channels && channels.length > 0) {
    return (
      <>
        <div
          data-testid="schedule"
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
