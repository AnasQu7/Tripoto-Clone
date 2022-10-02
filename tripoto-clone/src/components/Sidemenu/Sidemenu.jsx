import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  useDisclosure,
  Text,
  Avatar,
  Center,
  Container,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import axios from "axios";

export default function Sidemenu({scheme}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Sign, setSign] = useState(true);
  const [Login, setLogin] = useState(true);
  const toast = useToast();

  const { Auth, toggleAuth, toggleAccount, Account } = useContext(AuthContext);
  const handleLogout = () => {
    toggleAccount({});
    toggleAuth(false);
  };

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
  if (Auth) {
    return (
      <>
        <IconButton
          aria-label="Search database"
          colorScheme={scheme}
          onClick={onOpen}
          icon={<HamburgerIcon />}
        />
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent zIndex="2000">
            <DrawerCloseButton />
            <DrawerHeader>Account Details</DrawerHeader>

            <DrawerBody>
              <Center>
                <Avatar
                  name={Account.email}
                  size="2xl"
                  src="https://bit.ly/tioluwani-kolawole"
                />
              </Center>
              {/* <Text>Name : {Account.name}</Text> */}
              <Center>
                <Text mt={10} fontWeight="bold" fontSize={20}>
                  Email : {Account.email}
                </Text>
              </Center>
            </DrawerBody>

            <DrawerFooter>
              <Button colorScheme="blue" mr={3} onClick={handleLogout}>
                Log Out
              </Button>
              <Button variant="outline" mr={3} onClick={onClose}>
                Back
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  } else {
    if (Sign) {
      return (
        <>
          <IconButton
           colorScheme={scheme}
            aria-label="Search database"
            onClick={onOpen}
            icon={<HamburgerIcon />}
          />
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent zIndex="2000">
              <DrawerCloseButton />
              <DrawerHeader>Create your account</DrawerHeader>

              <DrawerBody>
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
                <Center mt="50px">
                  {" "}
                  <Button colorScheme="blue" mr={3}>
                    Sign Up
                  </Button>{" "}
                </Center>
              </DrawerBody>

              <DrawerFooter padding={20}>
                <Button
                  colorScheme="teal"
                  variant="link"
                  mb="20px"
                  onClick={() => {
                    setSign(!Sign);
                  }}
                >
                  Already Have Account! Login
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      );
    } else {
      return (
        <>
          <IconButton
             colorScheme={scheme}
            aria-label="Search database"
            onClick={onOpen}
            icon={<HamburgerIcon />}
          />
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent zIndex="2000">
              <DrawerCloseButton />
              <DrawerHeader>Login with your account</DrawerHeader>

              <DrawerBody>
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
                <Center mt="50px">
                  {" "}
                  <Button onClick={handleLogin} colorScheme="blue" mr={3}>
                    Log In
                  </Button>{" "}
                </Center>
              </DrawerBody>

              <DrawerFooter padding={20}>
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
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      );
    }
  }
}
