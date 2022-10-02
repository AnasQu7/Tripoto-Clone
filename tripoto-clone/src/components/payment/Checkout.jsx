import { ArrowForwardIcon } from '@chakra-ui/icons'
import {Box, Button, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, PinInput, PinInputField, Spinner, useDisclosure, useToast} from '@chakra-ui/react'
import React from "react"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Checkout(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    const pinRef = useToast();
    const finalRef = React.useRef(null)
    const navigate = useNavigate()
    const [Load, setLoad] = useState(false)
  
    return (
      <>
        
  
        <Button mb="35px" colorScheme='blue' disabled={props.disabled}  variant='solid' w="100%" h="70px" fontSize="1.8vw" mt={4} onClick={onOpen}>
        Submit Details <ArrowForwardIcon/>
        </Button>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>PAYMENT</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              

           <label>Otp</label>
           <HStack>
             <PinInput id='pininput'  type='alphanumeric' mask>
               <PinInputField />
               <PinInputField />
               <PinInputField />
               <PinInputField />
             </PinInput>
           </HStack>


              
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' disabled={Load} mr={3} onClick={()=>{
                setLoad(true)
                
                setTimeout(()=>{
                  setLoad(false)
                  navigate("/paymentsucess")
                },2000)
              }}>
               {Load ?
                <Spinner />:
                "Pay"
               } 
              </Button>
              <Button colorScheme="blue" variant='ghost' mr={3} onClick={()=>{
                      return toast({
                        position: "top",
                        title: "Your Otp Is",
                        description: `5 8 9 2`,
                        status: "info",
                        duration: 5000,
                        isClosable: true,
                      })
              }}>
               send otp 
              </Button>
              <Button variant='ghost' onClick={()=>{navigate("/")}}>Home</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }