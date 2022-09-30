import { AddIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { Add } from "./Add";
import { AiTwotoneHome } from 'react-icons/ai'
import { MdOutlineExplore } from 'react-icons/md'
import { GiSuitcase } from 'react-icons/gi'
import { HiSpeakerphone } from 'react-icons/hi'
import { Link } from "react-router-dom";

export default function Taskbar(){
    return (
        <>
        <Flex zIndex={2000}  justifyContent="space-evenly" position="fixed" bottom="0px" right="0px" left="0px" bg="white" h="50px" display={{lg:"none",md: "flex" , sm:"flex" , base:"flex"}} visibility={{lg:"hidden" , md:"inherit" , sm : "inherit" , base:"inherit"}}>
           <Link to="/">
            <Center><AiTwotoneHome size={25}/></Center>
           <Center> <Text fontSize={10}>HOME</Text></Center>
           </Link>
           <Link to="/explore">
            <Center><MdOutlineExplore size={25}/></Center>
            <Center> <Text fontSize={10}>EXPLORE</Text></Center>
            </Link>
            <Add />
           <Link to="/pakages">
           <Center><GiSuitcase size={25}/></Center>
           <Center> <Text fontSize={10}>PAKAGES</Text></Center>
            </Link>
           <Box>
           <Center> <HiSpeakerphone size={25}/></Center>
            <Center> <Text fontSize={10}>FORUM</Text></Center>
           </Box>

        </Flex>
        </>
    )
}