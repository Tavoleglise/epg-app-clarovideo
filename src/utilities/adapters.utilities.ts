import { Channel, Event } from "../models";

export const requestDataAdapter = (data: unknown[]): Channel[] => {
  return data.map((channel: unknown) => {
    const { id, number, name, hd, image, events } = channel as Record<
      string,
      unknown
    >;

    const parsedId = parseInt(id as string);
    const parsedNumber = parseInt(number as string);

    if (
      typeof parsedId !== "number" ||
      typeof parsedNumber !== "number" ||
      typeof name !== "string" ||
      typeof hd !== "boolean" ||
      typeof image !== "string" ||
      !Array.isArray(events)
    ) {
      throw new Error("Invalid channel data");
    }

    const adaptedEvents = events.map((event) => adaptEvent(event));

    return {
      id: parsedId,
      number: parsedNumber,
      name,
      hd,
      image,
      events: adaptedEvents,
    };
  });
};

export const adaptEvent = (rawEvent: Record<string, unknown>): Event => {
  const parsedId = parseInt(rawEvent.id as string);
  const parsedChannelId = parseInt(rawEvent.channelId as string);
  if (
    typeof parsedId !== "number" ||
    typeof parsedChannelId !== "number" ||
    typeof rawEvent.name !== "string" ||
    (rawEvent.description !== null &&
      typeof rawEvent.description !== "string") ||
    typeof rawEvent.date_begin !== "string" ||
    typeof rawEvent.date_end !== "string"
  ) {
    throw new Error("Invalid event data");
  }

  return {
    id: parsedId,
    channelId: parsedChannelId,
    name: rawEvent.name,
    description: rawEvent.description,
    dateBegin: rawEvent.date_begin,
    dateEnd: rawEvent.date_end,
  };
};

export const dateToParamDateAdapter = (
  day: number,
  month: number,
  year: number,
  isBegin: boolean
): string => {
  const parsedDate = `${year}${month < 10 ? `0${month}` : month}${
    day < 10 ? `0${day}` : day
  }${isBegin ? "000000" : "235959"}`;
  return parsedDate;
};
