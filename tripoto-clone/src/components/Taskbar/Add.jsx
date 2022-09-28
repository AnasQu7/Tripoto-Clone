import { AddIcon, CloseIcon } from "@chakra-ui/icons"
import { Avatar, Text, Box, Button, Center, Container, Flex, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Divider, Spacer, AvatarBadge } from "@chakra-ui/react"

export function Add() {
    const { isOpen, onOpen, onClose } = useDisclosure()
   
  
    return (
      <>
        <IconButton
        mt="-10px"
  colorScheme='blue'
  aria-label='Call Segun'
  size='lg'
  borderRadius={100}
  onClick={onOpen}
  icon={<AddIcon />}
/>
        <Modal backdropFilter="blur(10px)" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent  h="80vh" color="white" bg="" backdropFilter="blur(10px)">
           <Container> <ModalHeader  >Create a new...</ModalHeader></Container>
            
            <ModalBody>
              <Flex mt="160px" pl="30px" pr="30px" gap={2}>
              <Box>
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbkU_IGOiSMyKIRVRsafOUYpQ-FzsrXf7TQ&usqp=CAU" mb="5px" size="xl">
              </Avatar>
              <Center><Text>Tips</Text></Center>
              </Box>
              <Spacer/>
              <Divider orientation='vertical' />
              <Spacer/>
              <Box>
              <Avatar src="https://icons.iconarchive.com/icons/martz90/circle/512/camera-icon.png" mb="5px" size="xl">
              <AvatarBadge boxSize='0.5em' w="1.5em" border="0px" bg='green.500'><p style={{fontSize:"15px"}}>new</p></AvatarBadge>
              </Avatar>
              <Center><Text>Photo/Video</Text></Center>
              </Box>
  </Flex>
            </ModalBody>
  
            <ModalFooter>
             
             <Container>
             <Center> <Button borderRadius={100} colorScheme='blue' mr={3} onClick={onClose}>
               <CloseIcon/>
              </Button></Center>
             </Container>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }