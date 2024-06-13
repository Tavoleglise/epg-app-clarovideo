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

    // Asumiendo que tienes una validación o adaptación para los eventos
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
  // Validación básica para cada campo requerido
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

  // Retornar el evento adaptado
  return {
    id: parsedId,
    channelId: parsedChannelId,
    name: rawEvent.name,
    description: rawEvent.description,
    dateBegin: rawEvent.date_begin,
    dateEnd: rawEvent.date_end,
  };
};

/* [
    {
      id: 35357,
      number: 1,
      name: "tavo-tv",
      hd: true,
      image:
        "https://fastly.picsum.photos/id/294/290/163.jpg?hmac=Kdsziu-VHBvWBfpbAu-fhfiVUWIQAIgLjRXBN0_gTQo",
      events: [
        {
          id: 1,
          channelId: 35357,
          name: "NA",
          description: "",
          dateBegin: "2021-08-12T20:02:56",
          dateEnd: "2021-08-12T21:02:56",
        },
        {
          id: 2,
          channelId: 35357,
          name: "NA",
          description: "",
          dateBegin: "2021-08-12T21:02:56",
          dateEnd: "2021-08-12T22:02:56",
        },
        {
          id: 3,
          channelId: 35357,
          name: "NA",
          description: "",
          dateBegin: "2021-08-12T22:02:56",
          dateEnd: "2021-08-12T23:02:56",
        },
      ],
    },
  ] */
