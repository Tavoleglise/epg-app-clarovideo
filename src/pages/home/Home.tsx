import React from "react";
import { Button, useDisclosure } from "@nextui-org/react";

// Components
import MainModal from "../../components/mainModal/MainModal";
// import ProgrammingGuide from "../../components/programmingGuide/ProgrammingGuide";

const Home: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="bg-gradient-to-r from-white to-gray-400 h-screen flex justify-center items-center">
      <Button color="primary" onPress={onOpen}>
        Open EPG
      </Button>
      <MainModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
};

export default Home;
