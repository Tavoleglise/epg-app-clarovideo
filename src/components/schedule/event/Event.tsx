import React from "react";
import { Event } from "../../../models";
import FormatedTimePeriod from "../../commons/formatedTimePeriod/FormatedTimePeriod";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div
      className="flex flex-col justify-center items-start font-bold p-4 w-64 h-32 bg-gray-500/50 backdrop-blur border border-white border-opacity-25"
      key={event.id}
    >
      <div>{event.name}</div>
      <div>
        <FormatedTimePeriod
          dateBegin={event.dateBegin}
          dateEnd={event.dateEnd}
        />
      </div>
    </div>
  );
};

export default EventCard;
