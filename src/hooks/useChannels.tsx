import { useState, useEffect, useRef } from "react";
import useChannelsStore from "../stores/useChannelsStore";
import { getChannelsData } from "../services";
import { getFromStorage } from "../utilities";
import { requestDataAdapter } from "../utilities";
import { mock } from "../db/mock-info.ts";
import { SearchConfiguration } from "../models";

interface UseChannelsParams {
  numberOfChannels: number;
  searchConfiguration: SearchConfiguration;
}

const useChannels = ({
  numberOfChannels,
  searchConfiguration,
}: UseChannelsParams) => {
  const setChannels = useChannelsStore((state) => state.setChannels);
  const channels = useChannelsStore((state) => state.channels);
  const [loading, setLoading] = useState(false);

  const isFirstRender = useRef(true);
  const isFirstSeatchConfigurationRender = useRef(true);
  const numberOfChannelsRef = useRef(numberOfChannels);

  const { endDate, beginDate, region } = searchConfiguration;

  const getInicialData = async () => {
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

  const getChannels = async () => {
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
    //getInicialData();
    // console.log(mock.response.channels);
    setChannels(requestDataAdapter(mock.response.channels));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*useEffect(() => {
    const numberOfChannelsChanged =
      numberOfChannelsRef.current !== numberOfChannels;
    if (!isFirstRender.current && numberOfChannelsChanged) {
      console.log("Cambio en el numero de canales");
      getChannels();
    }
    numberOfChannelsRef.current = numberOfChannels;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfChannels]);

  useEffect(() => {
    if (isFirstSeatchConfigurationRender.current) {
      isFirstSeatchConfigurationRender.current = false; // Marca el primer renderizado como completado
    } else {
      getChannels(); // Esto se ejecutará solo en cambios subsiguientes, no en el primer renderizado
    }
  }, [searchConfiguration]);*/

  return { channels, loading };
};

export default useChannels;
