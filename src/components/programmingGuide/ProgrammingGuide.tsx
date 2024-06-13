import React, { useEffect } from "react";
import Schedule from "../schedule/Schedule";
import useChannelsStore from "../../stores/useChannelsStore";

const ProgrammingGuide: React.FC = () => {
  const channels = useChannelsStore((state) => state.channels);
  useEffect(() => {
    console.log(channels);
  }, [channels]);
  return (
    <div className="h-full">
      <div className="h-1/3 bg-black">{channels[0]?.name}</div>
      <Schedule />
    </div>
  );
};

export default ProgrammingGuide;
