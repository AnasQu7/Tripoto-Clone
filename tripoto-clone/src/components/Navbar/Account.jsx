import {
  Text,
  Avatar,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";

export default function Account() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { Account, toggleAccount, toggleAuth } = useContext(AuthContext);

  const handleLogout = () => {
    toggleAccount({});
    toggleAuth(false);
  };

  return (
    <>
      <Center>
        <Avatar
          onClick={onOpen}
          size="sm"
          name={Account.email}
          src="https://bit.ly/tioluwani-kolawole"
        />
      </Center>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Logged In As</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Avatar
              name={Account.email}
              src="https://bit.ly/tioluwani-kolawole"
            />
            {/* <Text>Name : {Account.name}</Text> */}
            <Text>Email : {Account.email}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleLogout}>
              Log Out
            </Button>
            <Button onClick={onClose}>Back</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
