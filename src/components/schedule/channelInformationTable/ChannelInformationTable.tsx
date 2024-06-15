import React from "react";
import { Channel } from "../../../models";

//componentes
import ChannelHead from "../channelHead/ChannelHead";

interface ChannelInformationTableProps {
  channels: Channel[];
}

const ChannelInformationTable: React.FC<ChannelInformationTableProps> = ({
  channels,
}) => {
  return (
    <div className="sticky left-0 z-50">
      {channels.map((channel) => {
        return <ChannelHead channel={channel} />;
      })}
    </div>
  );
};

export default ChannelInformationTable;
