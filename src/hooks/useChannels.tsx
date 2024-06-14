import { useState, useEffect } from "react";
import useChannelsStore from "../stores/useChannelsStore";
import { getChannelsData } from "../services";

const useChannels = () => {
  const setChannels = useChannelsStore((state) => state.setChannels);
  const channels = useChannelsStore((state) => state.channels);

  const [numberOfChannels, setNumberOfChannels] = useState(30);
  const [loading, setLoading] = useState(true);
  const [endDate, setEndDate] = useState("20200813200256");
  const [beginDate, setBeginDate] = useState("20200812200256");
  const [region, setRegion] = useState("colombia");

  const getInicialData = async () => {
    setLoading(true);
    const channelData = await getChannelsData(
      region,
      `${numberOfChannels}`,
      beginDate,
      endDate
    );
    setChannels(channelData);
    setLoading(false);
  };

  useEffect(() => {
    // setChannels(requestDataAdapter(mock.response.channels));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getInicialData();
  }, []);

  useEffect(() => {
    getChannelsData(
      "colombia",
      `${numberOfChannels}`,
      "20200812200256",
      "20200813200256"
    ).then((data) => {
      console.log(data);
      setChannels(data);
    });
  }, [numberOfChannels]);

  return { channels, loading, setNumberOfChannels };
};

export default useChannels;
