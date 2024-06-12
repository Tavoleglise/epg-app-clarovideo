import React, { useEffect } from "react";
import Schedule from "../schedule/Schedule";
import useChannelsStore from "../../stores/useChannelsStore";

const ProgrammingGuide: React.FC = () => {
  const channels = useChannelsStore((state) => state.channels);
  const setChannels = useChannelsStore((state) => state.setChannels);
  useEffect(() => {
    console.log(channels);
    setChannels([
      {
        id: 1,
        number: 1,
        name: "tavo-tv",
        hd: true,
        image: "",
      },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    console.log(channels);
  }, [channels]);
  return (
    <div className="h-full">
      <div className="h-1/3">{channels[0]?.name}</div>
      <Schedule />
    </div>
  );
};

export default ProgrammingGuide;
