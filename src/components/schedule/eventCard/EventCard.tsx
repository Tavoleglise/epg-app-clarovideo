import React from "react";
import { Event } from "../../../models";
import { calculateEventNormalizedTime } from "../../../utilities";
import { getFromStorage } from "../../../utilities";

// components
import FormatedTimePeriod from "../../commons/formatedTimePeriod/FormatedTimePeriod";

interface EventCardProps {
  event: Event;
  handleEventSelection: (event: Event) => void;
}

const EventCard: React.FC<EventCardProps> = ({
  event,
  handleEventSelection,
}) => {
  const configuration = getFromStorage("searchConfiguration", "local", {});
  const normalizedTime = calculateEventNormalizedTime(
    event.dateBegin,
    event.dateEnd,
    configuration.beginDate
  );

  const handleMouseEnter = () => {
    handleEventSelection(event);
  };

  return (
    <div onMouseEnter={handleMouseEnter}>
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
          <div>{`${normalizedTime.dateBeginNormalized} - ${normalizedTime.dateEndNormalized}`}</div>
          {/* <div>{`begindaybefore - ${normalizedTime.beginisDayBefore} || enddayafter - ${normalizedTime.endIsDayAfter}`}</div> */}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
