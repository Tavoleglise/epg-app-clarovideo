import React, { useEffect, useState } from "react";
import useChannelsStore from "../../stores/useChannelsStore";
import useChannels from "../../hooks/useChannels.tsx";
// import { getCurrentTime } from "../../utilities";
import { getChannelsData } from "../../services";
import { Spinner } from "@nextui-org/react";
import { mock } from "../../db/mock-info.ts";
import { requestDataAdapter } from "../../utilities";

//components
import EventsTable from "./eventsTable/EventsTable";
import ChannelHead from "./channelHead/ChannelHead";

const Schedule: React.FC = () => {
  // const actualTime = getCurrentTime();
  const hourWidth = 100;
  const { channels, loading } = useChannels();

  if (!channels || (channels && channels?.length === 0) || loading)
    return (
      <div className="h-2/3 flex justify-center items-center">
        <Spinner color="primary" />
      </div>
    );
  if (channels && channels.length > 0) {
    return (
      <div className="h-2/3 flex bg-gradient-to-r from-gray-800 to-black overflow-x-auto overflow-y-auto">
        <div className="sticky left-0 z-50">
          {channels.map((channel) => {
            return <ChannelHead channel={channel} />;
          })}
        </div>
        <EventsTable channels={channels} />
      </div>
    );
  }
};

export default Schedule;
