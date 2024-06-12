import { Modal, ModalContent } from "@nextui-org/react";
import ProgrammingGuide from "../programmingGuide/ProgrammingGuide";

interface MainModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

const MainModal: React.FC<MainModalProps> = ({ isOpen, onOpenChange }) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      size="full"
    >
      <ModalContent>
        <ProgrammingGuide />
      </ModalContent>
    </Modal>
  );
};

export default MainModal;
