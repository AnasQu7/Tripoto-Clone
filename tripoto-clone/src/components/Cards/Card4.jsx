// explore

import { Avatar, Badge, Box ,Flex,Image, Text} from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import {IoHeartCircleSharp} from 'react-icons/io5';
import {BsHeart,BsHeartFill,BsShare} from 'react-icons/bs';
import {BiComment} from 'react-icons/bi';


export default function Card4(props) {
    const [Author , setAuthor] = useState([])
    const [Like , setLike] = useState(false)
    useEffect(()=>{
        getData()
    },[])
    function getData(){
        let url = `${process.env.REACT_APP_API_URL}/authors?id=${props.authorId}`
        axios.get(url)
          .then(function (response) {
          
            setAuthor(response.data)
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    } 
       console.log(props)
    console.log(Author)      
    
    return (
      
       Author.map((el)=>{
            return (
                <Box maxW='100%' borderWidth='1px' borderRadius='lg' overflow='hidden' mb="20px">
  
        <Box p='6'>
          <Box display='flex' alignItems='center' gap={5}>
            <Avatar name={el.name} src={el?el.avatar:'https://bit.ly/tioluwani-kolawole'} />
            <Text>{el.name}</Text>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {/* name */}
            </Box>
          </Box>
          <Image mt="5px" width="100%" src={props.image} />
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            
          >
           {props.description}
          </Box>
  
         
       </Box>
       <Flex px="6" justifyContent="space-between">
      <Flex alignItems="center"  > <IoHeartCircleSharp color="red"/><Text> 8  likes</Text></Flex>
      <Text>3.8k veiws</Text>
       </Flex>
       <Flex height="50px" borderTop="1px solid grey" px="6" justifyContent="space-between">
        <Flex onClick={()=>{setLike(!Like)}} alignItems="center">{!Like?<BsHeart />: <BsHeartFill color="red"/>}<Text ml="2px">Like</Text></Flex>
        <Flex alignItems="center"><BiComment/><Text ml="2px">Comment</Text></Flex>
        <Flex alignItems="center"><BsShare/><Text ml="2px">Share</Text></Flex>
       </Flex>
      </Box>
            )
        })
      
    )
  }