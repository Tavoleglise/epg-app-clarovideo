import React from "react";
import { Channel } from "../../../models";
import { Image } from "@nextui-org/react";

interface ChannelHeadProps {
  channel: Channel;
}

const ChannelHead: React.FC<ChannelHeadProps> = ({ channel }) => {
  return (
    <div className="flex justify-center items-center p-4 h-32 bg-gray-900/50 text-gray-300 backdrop-blur border border-white border-opacity-25 shadow-right z-10 sm:w-64 w-32">
      <div className="w-32">
        <Image
          alt={`${channel.name} logo image`}
          src={channel.image}
          width={150}
          fallbackSrc="https://fastly.picsum.photos/id/294/290/163.jpg?hmac=Kdsziu-VHBvWBfpbAu-fhfiVUWIQAIgLjRXBN0_gTQo"
        />
        <div className="mt-2">{channel.name}</div>
      </div>
      <div className="w-32 h-full flex text-medium sm:text-2xl justify-end items-start">
        {channel.number}
      </div>
    </div>
  );
};

export default ChannelHead;
