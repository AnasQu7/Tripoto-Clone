import { AddIcon, CloseIcon } from "@chakra-ui/icons"
import { Avatar, Text, Box, Button, Center, Container, Flex, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Divider, Spacer, AvatarBadge, Toast, useToast } from "@chakra-ui/react"
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContextProvider"

export function Add() {
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {Auth} = useContext(AuthContext)
    const toast = useToast();

    const handleredirect = ()=>{
        if(Auth){
          navigate("/upload")
        }else{
         return toast({
            position: "top-left",
            title: "Not Signed In",
            description: `Please Log In or Sign Up to continue`,
            status: "error",
            duration: 5000,
            isClosable: true,
          })
        }
    }
  
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
              <Link to="/explore">
              <Avatar src="https://aurin.org.au/wp-content/uploads/2022/06/Explore-Icon-400x400.png" mb="5px" size="xl">
              </Avatar>
              <Center><Text>Explore</Text></Center>
              </Link>
              <Spacer/>
              <Divider orientation='vertical' />
              <Spacer/>
              <Box onClick={handleredirect}>
              <Avatar src="https://icons.iconarchive.com/icons/martz90/circle/512/camera-icon.png" mb="5px" size="xl">
              <AvatarBadge boxSize='0.5em' w="1.5em" border="0px" bg='green.500'><p style={{fontSize:"15px"}}>new</p></AvatarBadge>
              </Avatar>
              <Center><Text>Upload Photo</Text></Center>
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