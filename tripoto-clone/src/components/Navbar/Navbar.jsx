import { Text, IconButton,Box, Center, Flex, Image, Input, Menu, MenuButton, MenuItem, MenuList, Spacer, Tooltip, InputGroup, InputRightAddon, InputLeftAddon } from "@chakra-ui/react";
import {ArrowUpIcon, SearchIcon, TriangleDownIcon} from "@chakra-ui/icons"
import { useState } from "react";
import "./navbar.css";
import Signin from "./Signin"




export default function Navbar() {

    const [Style, setStyle] = useState(false);
    const [Hide, setHide] = useState(false);

    window.addEventListener('scroll' ,()=>{
        if(!Style && Math.floor(window.scrollY)>180){
            console.log("yes")
            setStyle(true)
            setHide(true)
        }
        
        else if(Style && Math.floor(window.scrollY)<180){
            console.log("no")
            setStyle(false)
            setHide(false)
        }
        
        console.log(window.scrollY)
    })
 
    
  
  


  return (
    <>
      <Flex flexDirection={{lg:"row" , md: "column" , sm:"column"}} transition="0.5s" bg={Style?"#2F9BDB":"Transparent"} p={2} w="100%" justifyContent={{lg:"space-between" , md:"center",sm:"center"}} pos="fixed" top="0" gap={{lg:"40px" , md:"5px" , sm : "3px" }}>
        
        <Flex gap={1} alignItems="center" flexDirection={{lg:"row",md:"column" , sm:"column"}} justifyContent="space-around" minW="50%">
          <Flex justifyContent="space-between" w="500px">
          <Image
            src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg"
            alt="Tripoto Icon"
            objectFit='cover'
          />
          <Text display={{lg:"none" , md:"block" , sm : "block" }} color="white">GET APP</Text>
          </Flex >
         <Spacer/>
            <Box w="100%" >
            <InputGroup bg="white" overflow="hidden" borderRadius={5}  transition="1s" display={Hide? "flex" :"none" }>
            <InputLeftAddon h="100%" display={{lg:"none" , md:"block" , sm:"block"}} children={<IconButton aria-label='Search database' icon={<SearchIcon />} />}/>
            <Input placeholder='Search For Destinations Hotels & Activities'   />
            <InputRightAddon h="100%" display={{lg:"block" , md:"none" , sm:"none"}}  children={<IconButton aria-label='Search database' icon={<SearchIcon />} />}/>
            <InputRightAddon h="100%" display={{lg:"none" , md:"block" , sm:"block"}}  children={<IconButton aria-label='Search database' onClick={()=>{setHide(false)}} icon={<ArrowUpIcon />} />}/>
            </InputGroup>
            </Box>
            </Flex>
        <Spacer/>
        <Flex pl="20px" w="35%" pr="20px" gap={2} display={{lg:"flex",md:"none",sm:"none"}}>
          {/* 88888888888888888888888888888 */}
          <Menu>
            <>
                <MenuButton color="white">
                 Inspiration <TriangleDownIcon w="10px" />
                </MenuButton>
                <MenuList>
                  <MenuItem>Visit Singapore</MenuItem>
                  <MenuItem>Beaches</MenuItem>
                  <MenuItem>Mountains</MenuItem>
                  <MenuItem>Heritage</MenuItem>
                  <MenuItem>Weekend Guid</MenuItem>
                  <MenuItem>Upcomming Festival</MenuItem>
                  <MenuItem>Honeymoon Pakage</MenuItem>
                  <MenuItem>Wildlife tourism</MenuItem>
                  <MenuItem>Road Trip</MenuItem>
                  <MenuItem>Gateway Guid</MenuItem>
                  <MenuItem>Luxoury Travel</MenuItem>
                </MenuList>
              </>
          </Menu>
          <Spacer/>
          {/* 88888888888888888888888888888 */}
          <Center  color="white">
          <Tooltip label="Forum" aria-label='A tooltip' >
            <p style={{colo : "white"}}>
            Forum
            </p>
          </Tooltip>
          </Center>
          <Spacer/>
          {/* 88888888888888888888888888888 */}
          <Center color="white">
          <Tooltip label="Pakages" aria-label='A tooltip' >
            <p style={{colo : "white"}}>
            Pakages
            </p>
          </Tooltip>
          </Center>
          <Spacer/>
          {/* 88888888888888888888888888888 */}
          <Menu>
            <>
                <MenuButton color="white">
                 Publish Trip <TriangleDownIcon w="10px" />
                </MenuButton>
                <MenuList>
                  <MenuItem>Create New</MenuItem>
                  <MenuItem>Upload Photos/Videos</MenuItem>
                  <MenuItem>Import Blog</MenuItem>
                  
                </MenuList>
              </>
          </Menu>
          {/* 88888888888888888888888888888 */}
          <Spacer/>
          <Signin/>
        </Flex>
      </Flex>
      <Box h="1000px" >
        <img
          src="https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1342&q=80"
          width="100%"
          alt=""
        />
      </Box>
    </>
  );
}
