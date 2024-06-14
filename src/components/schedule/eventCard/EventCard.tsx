import React from "react";
import { Event } from "../../../models";
import { calculateEventNormalizedTime } from "../../../utilities";

// components
import FormatedTimePeriod from "../../commons/formatedTimePeriod/FormatedTimePeriod";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const normalizedTime = calculateEventNormalizedTime(
    event.dateBegin,
    event.dateEnd
  );
  return (
    <div>
      <div
        style={{
          width: `${16 * normalizedTime.normalizedTotalHours}rem`,
        }}
        className="flex flex-col justify-center items-start font-bold p-4 h-32 bg-gray-500/50 backdrop-blur border border-white border-opacity-25"
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
    </div>
  );
};

export default EventCard;