import React, { useEffect } from "react";
import useChannelsStore from "../../stores/useChannelsStore";
// import { getCurrentTime } from "../../utilities";
import { getChannelsData } from "../../services";

//components
import ChannelSchedule from "./channelSchedule/ChannelSchedule";

const Schedule: React.FC = () => {
  // const actualTime = getCurrentTime();
  const setChannels = useChannelsStore((state) => state.setChannels);
  const channels = useChannelsStore((state) => state.channels);
  useEffect(() => {
    try {
      getChannelsData("mexico", "5", "20200812200256", "20200813200256").then(
        (data) => {
          console.log(data);
          setChannels(data);
        }
      );
    } catch (error) {
      console.error("Error: ", error);
    }

    /* setChannels([
      {
        id: 35357,
        number: 1,
        name: "tavo-tv",
        hd: true,
        image:
          "https://fastly.picsum.photos/id/294/290/163.jpg?hmac=Kdsziu-VHBvWBfpbAu-fhfiVUWIQAIgLjRXBN0_gTQo",
        events: [
          {
            id: 1,
            channelId: 35357,
            name: "NA",
            description: "",
            dateBegin: "2021-08-12T20:02:56",
            dateEnd: "2021-08-12T21:02:56",
          },
          {
            id: 2,
            channelId: 35357,
            name: "NA",
            description: "",
            dateBegin: "2021-08-12T21:02:56",
            dateEnd: "2021-08-12T22:02:56",
          },
          {
            id: 3,
            channelId: 35357,
            name: "NA",
            description: "",
            dateBegin: "2021-08-12T22:02:56",
            dateEnd: "2021-08-12T23:02:56",
          },
        ],
      },
    ]); */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    console.log(channels);
  }, [channels]);
  if (!channels || (channels && channels?.length === 0))
    return <div>Loading...</div>;
  if (channels && channels.length > 0) {
    return (
      <div className="h-2/3 bg-gradient-to-r from-gray-800 to-black">
        <div>
          {channels.map((channel) => {
            return <ChannelSchedule channel={channel} />;
          })}
        </div>
      </div>
    );
  }
};

export default Schedule;
