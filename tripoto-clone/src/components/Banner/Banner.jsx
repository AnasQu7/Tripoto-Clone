import { SearchIcon } from "@chakra-ui/icons";
import {Text, Box, Center, Heading, IconButton, Input, InputGroup, InputRightAddon, Divider } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
// import banner1 from "../../../public/Images/banner1.jpg"
export default function Banner ({num,text}){
 
    const [SuggestData, setSuggestData] = useState([])
    const InputRef = useRef()
    
    console.log(InputRef.current)
    console.log(document.activeElement)
    const handleSuggestions = (event)=>{
      console.log(process.env.REACT_APP_API_URL)
      console.log(event.target.value)
      
      axios.get(`${process.env.REACT_APP_API_URL}/hotels?q=${event.target.value}&_limit=5`)
      .then(function (response) {
        // handle success
        if(event.target.value===""){
          setSuggestData([])
        }else{

          setSuggestData(response.data)
        }
        console.log(SuggestData)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setSuggestData([])
      })
      var id ;
      id = setTimeout(()=>{
        clearInterval(id);
        setSuggestData([])
      },50000)
    }
    return <>
    <Box h="450px" width="100%" backgroundImage={`./Images/banner${num}.jpg`} backgroundRepeat="no-repeat" backgroundSize="cover">

      <Center> <Heading mt="150px" fontSize="45px" textAlign="center" maxW="850px" color="white" >{text}</Heading></Center>
       <Center>
       <InputGroup maxW="750px" zIndex="0" mt="20px" h="60px" >
       <Input variant='unstyled' bg="white" pl="20px" onChange={handleSuggestions} placeholder='Search for iteneries, destinations, hotels or activities.' />
        <InputRightAddon h="60px"  children={<SearchIcon  />} />
       </InputGroup>
       </Center>
       <Center>

        <Box bg="white" w="750px" >{SuggestData.length!==0? SuggestData.map((el)=><Box className="hover"  pl="15px">
          <Text fontSize='xl'>{el.tilte}</Text>
          <Text as='sub' color="grey" >{el.Cities[0]}</Text>
          <Divider mt="5px"/>
        </Box>): ""}</Box>
       </Center>
      </Box>
    </>
}