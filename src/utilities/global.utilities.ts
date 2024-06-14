type StorageType = "local" | "session";

export const getFromStorage = (
  key: string,
  type: StorageType = "local",
  otherwise: unknown
) => {
  const storage = type === "local" ? localStorage : sessionStorage;
  const item = storage.getItem(key);
  console.log(item);
  return item && item !== "undefined" ? JSON.parse(item) : otherwise;
};

export const setToStorage = (
  key: string,
  value: unknown,
  type: StorageType = "local"
) => {
  console.log(value);
  const storage = type === "local" ? localStorage : sessionStorage;
  const stringifiedValue = JSON.stringify(value);
  storage.setItem(key, stringifiedValue);
  return JSON.parse(stringifiedValue);
};

export const request = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export const buildUrl = (baseUrl: string, params: Record<string, string>) => {
  const url = new URL(baseUrl);
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  return url.toString();
};
