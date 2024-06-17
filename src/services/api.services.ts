import { request, buildUrl, requestDataAdapter } from "../utilities";

const baseUrl = "https://mfwkweb-api.clarovideo.net/services/epg/channel";
const authpt = import.meta.env.VITE_API_AUTHPT;
const userId = import.meta.env.VITE_VITE_API_USERID;

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
    authpt: authpt,
    api_version: "v5.93",
    region: region,
    HKS: "web61144bb49d549",
    user_id: userId,
    date_from: date_from,
    date_to: date_to,
    quantity: quantity,
  };
  try {
    const data = await request(buildUrl(baseUrl, URLSearchParams));
    const formatedData = requestDataAdapter(data.response.channels);
    return formatedData;
  } catch (error) {
    console.error("Error: ", error);
    return [];
  }
};
