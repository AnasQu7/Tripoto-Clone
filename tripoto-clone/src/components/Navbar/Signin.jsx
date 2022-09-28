import {
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Center,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import axios from "axios";
export default function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Sign, setSign] = useState(true);
  const [Login, setLogin] = useState(true);
  const toast = useToast();

  const { Auth, toggleAuth, toggleAccount } = useContext(AuthContext);

  const handleLogInChange = (e) => {
    setLogin({ ...Login, [e.target.name]: e.target.value });
    console.log(Login);
  };
  const handleLogin = () => {
    console.log(Login);
    axios({
      method: "post",
      url: "https://reqres.in/api/login",
      data: Login,
    })
      .then(function (response) {
        if (response.data !== undefined) {
          toggleAuth(true);
          toggleAccount({ email: Login.email });
          return toast({
            position: "bottom-left",
            title: "Log In Successful!",
            description: `Welcome ${Login.email}`,
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        return toast({
          position: "bottom-left",
          title: "Something Went Wrong!",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
    setLogin({});
  };

  if (Sign) {
    return (
      <>
        <Center color="white">
          <Text onClick={onOpen}>Sign In</Text>
        </Center>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Enter your Name" name="name" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Enter your Email"
                  name="email"
                  type="email"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="Enter your Password"
                  name="password"
                  type="password"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter justifyContent="space-between">
              <Button
                colorScheme="teal"
                variant="link"
                mr={3}
                onClick={() => {
                  setSign(!Sign);
                }}
              >
                Already Have Account! Login
              </Button>
              <Button colorScheme="blue" mr={3}>
                Sign Up
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  } else {
    return (
      <>
        <Center color="white">
          <Text onClick={onOpen}>Log In</Text>
        </Center>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Log In with your Account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={handleLogInChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="Password"
                  type="Password"
                  name="password"
                  onChange={handleLogInChange}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter justifyContent="space-between">
              <Button
                colorScheme="teal"
                variant="link"
                mr={3}
                onClick={() => {
                  setSign(!Sign);
                }}
              >
                Don't Have Account! Sign Up
              </Button>
              <Button onClick={handleLogin} colorScheme="blue" mr={3}>
                Log In
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
}
