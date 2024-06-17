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
      className="h-full bg-gray text-gray-200 p-8 xl:py-8 xl:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <FormatedTimeAndDate
        date={event?.dateBegin}
        style="text-2xl xl:text-3xl"
      />
      <div className="text-3xl xl:text-5xl">
        {event?.name ? event.name : "No event selected"}
      </div>
      <div className="text-xl mt-4 xl:mt-8 w-full lg:w-1/2">
        {event?.description}
      </div>
    </motion.div>
  );
};

export default EventInformation;
