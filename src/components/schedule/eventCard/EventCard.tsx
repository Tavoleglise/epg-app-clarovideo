import React, { useMemo } from "react";
import { Event } from "../../../models";
import { calculateEventNormalizedTime } from "../../../utilities";
import useSearchConfigurationStore from "../../../stores/useSearchConfigurationStore";

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
  const configurationFromStore = useSearchConfigurationStore(
    (state) => state.searchConfiguration
  );
  const { normalizedTime } = useMemo(() => {
    const configuration = configurationFromStore;
    const normalizedTime = calculateEventNormalizedTime(
      event.dateBegin,
      event.dateEnd,
      configuration.beginDate
    );
    return { configuration, normalizedTime };
  }, [configurationFromStore]);

  const handleMouseEnter = () => {
    handleEventSelection(event);
  };

  return (
    <div
      onClick={handleMouseEnter}
      style={{
        width: `${16 * normalizedTime.normalizedTotalHours}em`,
      }}
      className="flex flex-col justify-center items-start font-bold h-32 bg-gray-500/50 hover:bg-gray-200/50 backdrop-blur border border-white border-opacity-25 overflow-hidden cursor-pointer"
      key={event.id}
    >
      <div className="px-4 whitespace-nowrap">
        <div>{event.name}</div>
        <div>
          <FormatedTimePeriod
            dateBegin={event.dateBegin}
            dateEnd={event.dateEnd}
          />
        </div>
        {normalizedTime.beginisDayBefore && (
          <div>...Event begins previous day</div>
        )}
        {normalizedTime.endIsDayAfter && <div>...Event continous next day</div>}
      </div>
    </div>
  );
};

export default EventCard;
