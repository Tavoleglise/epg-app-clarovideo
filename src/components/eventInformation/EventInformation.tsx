import React from "react";
import { Event } from "../../models";
import { motion } from "framer-motion";

// components
import FormatedTimeAndDate from "../commons/formatedTimeAndDate/FormatedTimeAndDate";

interface EventInformationProps {
  event: Event | null;
}

const EventInformation: React.FC<EventInformationProps> = ({ event }) => {
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      key={event ? event.id : "empty"}
      className="h-full bg-gray text-gray-200 p-8 sm:p-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <FormatedTimeAndDate
        date={event?.dateBegin}
        style="text-2xl sm:text-3xl"
      />
      <div className="text-3xl sm:text-5xl">
        {event?.name ? event.name : "No event selected"}
      </div>
      <div className="text-xl mt-16 w-full lg:w-1/2">{event?.description}</div>
    </motion.div>
  );
};

export default EventInformation;
