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

export const parseDateString = (dateString: string) => {
  const dateParts = dateString.split(/[/ :]/);
  return {
    year: parseInt(dateParts[0], 10),
    month: parseInt(dateParts[1], 10),
    day: parseInt(dateParts[2], 10),
    hour: parseInt(dateParts[3], 10),
    minute: parseInt(dateParts[4], 10),
    second: parseInt(dateParts[5], 10),
  };
};

export const generateUniqueNumber = (): number => {
  const time = new Date().getTime(); // Tiempo actual en milisegundos
  const random = Math.floor(Math.random() * 1000); // Número aleatorio entre 0 y 999
  return time + random; // Combinar ambos para obtener un número único
};
