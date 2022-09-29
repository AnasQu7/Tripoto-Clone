import { AddIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { Add } from "./Add";
import { AiTwotoneHome } from 'react-icons/ai'
import { MdOutlineExplore } from 'react-icons/md'
import { GiSuitcase } from 'react-icons/gi'
import { HiSpeakerphone } from 'react-icons/hi'

export default function Taskbar(){
    return (
        <>
        <Flex  justifyContent="space-evenly" position="fixed" bottom="0px" right="0px" left="0px" bg="white" h="50px" display={{lg:"none",md: "flex" , sm:"flex" , base:"flex"}} visibility={{lg:"hidden" , md:"inherit" , sm : "inherit" , base:"inherit"}}>
           <Box>
            <Center><AiTwotoneHome size={25}/></Center>
           <Center> <Text fontSize={10}>HOME</Text></Center>
           </Box>
           <Box>
            <Center><MdOutlineExplore size={25}/></Center>
            <Center> <Text fontSize={10}>EXPLORE</Text></Center>
            </Box>
            <Add />
           <Box>
           <Center><GiSuitcase size={25}/></Center>
           <Center> <Text fontSize={10}>PAKAGES</Text></Center>
            </Box>
           <Box>
           <Center> <HiSpeakerphone size={25}/></Center>
            <Center> <Text fontSize={10}>FORUM</Text></Center>
           </Box>

        </Flex>
        </>
    )
}