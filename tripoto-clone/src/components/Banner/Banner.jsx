import { SearchIcon } from "@chakra-ui/icons";
import {Text, Box, Center, Heading, IconButton, Input, InputGroup, InputRightAddon, Divider } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContextProvider";
// import banner1 from "../../../public/Images/banner1.jpg"
export default function Banner ({num,text}){
    const navigate = useNavigate()
    const [SuggestData, setSuggestData] = useState([])
   const {Search,toggleSearch} = useContext(SearchContext)
    const [InputVal , setInputVal] = useState("")
    const inputRef = useRef(null)
    const handleSuggestions = (event)=>{
      console.log(process.env.REACT_APP_API_URL)
      console.log(event.target.value)
      setInputVal(event.target.value)
      axios.get(`${process.env.REACT_APP_API_URL}/hotels?q=${event.target.value}&_limit=5`)
      .then(function (response) {
        // handle success
        if(event.target.value===""){
          setSuggestData([])
        }else{

          setSuggestData(response.data)
        }
        
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
    const handleSearch= () => {
      
      toggleSearch(InputVal);
      navigate('/search')
       inputRef.current.value = ""
       setSuggestData([])
    }
    const toggleSuggested = (event) => {
        console.log(event.target.textContent)
        toggleSearch(event.target.textContent);
        navigate('/search')
        inputRef.current.value = ""
       setSuggestData([])
    }
    return <>
    <Box h="450px" width="100%" backgroundImage={`./Images/banner${num}.jpg`} backgroundRepeat="no-repeat" backgroundSize="cover">

      <Center> <Heading mt="150px" fontSize="45px" textAlign="center" maxW="850px" color="white" >{text}</Heading></Center>
       <Center>
       <InputGroup maxW="750px" zIndex="0" mt="20px" h="60px" >
       <Input variant='unstyled' bg="white" pl="20px" ref={inputRef } onChange={handleSuggestions} onKeyPress={(event)=>{
        
        if(event.code === "Enter"){
          handleSearch()
        }
       }} placeholder='Search for iteneries, destinations, hotels or activities.' />
        <InputRightAddon h="60px" onClick={handleSearch}  children={<SearchIcon  />} />
       </InputGroup>
       </Center>
       <Center>

        <Box bg="white" zIndex={200} w="750px" >{SuggestData.length!==0? SuggestData.map((el)=><Box className="hover"  pl="15px">
          <Text fontSize='xl' className="suggestion" onClick={toggleSuggested}>{el.title}</Text>
          <Text as='sub' color="grey" className="suggestion" onClick={toggleSuggested} >{el.Cities[0]}</Text>
          <Divider mt="5px"/>
        </Box>): ""}</Box>
       </Center>
      </Box>
    </>
}