type StorageType = "local" | "session";

export const getFromStorage = (
  key: string,
  type: StorageType = "local",
  otherwise: unknown
) => {
  const storage = type === "local" ? localStorage : sessionStorage;
  const item = storage.getItem(key);
  return item ? JSON.parse(item) : otherwise;
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
