import { useState, useEffect, useRef } from "react";
import useChannelsStore from "../stores/useChannelsStore";
import { getChannelsData } from "../services";
import { getFromStorage } from "../utilities";
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
  const isFirstRender = useRef(true);
  const numberOfChannelsRef = useRef(numberOfChannels);

  const getInicialData = async () => {
    console.log(getFromStorage("channels", "local", []));
    const localChannels = getFromStorage("channels", "local", []);
    if (localChannels.length > 0) {
      setChannels(localChannels);
    } else {
      console.log("OBTIENE DE API");
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
    }
  };

  const getChannelDataWhenScrolling = async () => {
    console.log("SCROLLING");
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
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
  });
  useEffect(() => {
    // getInicialData();
    // console.log(mock.response.channels);
    setChannels(requestDataAdapter(mock.response.channels));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*useEffect(() => {
    const numberOfChannelsChanged =
      numberOfChannelsRef.current !== numberOfChannels;
    if (!isFirstRender.current && numberOfChannelsChanged) {
      getChannelDataWhenScrolling();
    }
    numberOfChannelsRef.current = numberOfChannels;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfChannels]);*/

  return { channels, loading };
};

export default useChannels;
