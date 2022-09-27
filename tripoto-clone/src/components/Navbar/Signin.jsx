import {Text, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Center } from "@chakra-ui/react"
import React from "react"
import { useState } from "react"

export default function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [Sign ,setSign] = useState(true)
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    if(Sign){
        return (
            <>
            <Center color="white">
            <Text onClick={onOpen}>Sign In</Text>
            </Center>
        
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create your account</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>First name</FormLabel>
                    <Input ref={initialRef} placeholder='First name' />
                  </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel>Last name</FormLabel>
                    <Input placeholder='Last name' />
                  </FormControl>
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3}>
                    Sign Up
                  </Button>
                  <Button colorScheme='teal' mr={3} onClick={()=>{setSign(!Sign)}}>
                    Login
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
          )
    }else{
        return (
            <>
            <Center color="white">
            <Text onClick={onOpen}>Sign In</Text>
            </Center>
        
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Log In with your Account</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>First name</FormLabel>
                    <Input ref={initialRef} placeholder='First name' />
                  </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel>Last name</FormLabel>
                    <Input placeholder='Last name' />
                  </FormControl>
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3}>
                    Log In
                  </Button>
                  <Button colorScheme='teal' mr={3} onClick={()=>{setSign(!Sign)}}>
                    Sign Up
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
          )
    }

  }