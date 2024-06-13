import { request, buildUrl, requestDataAdapter } from "../utilities";

const baseUrl = "https://mfwkweb-api.clarovideo.net/services/epg/channel";

export const getChannelsData = async (
  region: string,
  quantity: string,
  date_from: string,
  date_to: string
) => {
  const URLSearchParams = {
    device_id: "web",
    device_category: "web",
    device_model: "web",
    device_type: "web",
    device_so: "Chrome",
    format: "json",
    device_manufacturer: "generic",
    authpn: "webclient",
    authpt: "tfg1h3j4k6fd7",
    api_version: "v5.93",
    region: region,
    HKS: "web61144bb49d549",
    user_id: "54343080",
    date_from: date_from,
    date_to: date_to,
    quantity: quantity,
  };
  const data = await request(buildUrl(baseUrl, URLSearchParams));
  console.log(data.response.channels[0].events);
  const formatedData = requestDataAdapter(data.response.channels);
  return formatedData;
};
