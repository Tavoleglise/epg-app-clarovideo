import { useState, useEffect } from "react";
import useChannelsStore from "../stores/useChannelsStore";
import { getChannelsData } from "../services";
import { requestDataAdapter } from "../utilities";
import { mock } from "../db/mock-info.ts";

interface UseChannelsParams {
  numberOfChannels: number;
  endDate: string;
  beginDate: string;
  region: string;
}

const useChannels = ({
  numberOfChannels,
  endDate,
  beginDate,
  region,
}: UseChannelsParams) => {
  const setChannels = useChannelsStore((state) => state.setChannels);
  const channels = useChannelsStore((state) => state.channels);

  const [loading, setLoading] = useState(false);

  const getInicialData = async () => {
    setLoading(true);
    const channelData = await getChannelsData(
      region,
      `${numberOfChannels}`,
      beginDate,
      endDate
    );
    console.log(channelData);
    setChannels(channelData);
    setLoading(false);
  };

  useEffect(() => {
    // console.log(mock.response.channels);
    // setChannels(requestDataAdapter(mock.response.channels));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getInicialData();
  }, []);

  /*useEffect(() => {
    getChannelsData(
      "colombia",
      `${numberOfChannels}`,
      "20200812200256",
      "20200813200256"
    ).then((data) => {
      console.log(data);
      setChannels(data);
    });
  }, [numberOfChannels]); */

  return { channels, loading };
};

export default useChannels;
