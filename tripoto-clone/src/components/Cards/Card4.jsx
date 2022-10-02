// explore

import { Avatar, Badge, Box ,Center,Flex,Image, Text} from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import {IoHeartCircleSharp} from 'react-icons/io5';
import {BsHeart,BsHeartFill,BsShare} from 'react-icons/bs';
import {BiComment} from 'react-icons/bi';


export default function Card4(props) {
    const [Author , setAuthor] = useState([])
    const [Like , setLike] = useState(false)
    const [Likecount,setLikecount] = useState(0)
    useEffect(()=>{
       if(props.authorId){

         getData()
       } 
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
    //    console.log(props)
    // console.log(Author)      
    
    return (
             <>
                <Box maxW='100%' borderWidth='1px' borderRadius='lg' overflow='hidden' mb="20px">
  
        <Box p='6'>
          <Box display='flex' alignItems='center' gap={5}>
         { (Author.length!==0)? Author.map((el)=>{ 
           return (<><Avatar name={el.name} src={el.avatar?el.avatar:'https://bit.ly/tioluwani-kolawole'} />
            <Text>{el.name}</Text></>)
         }):<><Avatar name={props.name} src='https://bit.ly/tioluwani-kolawole'/>
         <Text>{props.name}</Text></>}
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
         {(props.type==="video")?<Center w="565" h="315" m="auto"><iframe width="560" height="315" src={props.image}  style={props.style} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Center>
          :<Image mt="5px" width="100%" src={props.image} style={props.style} />}
  
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
      <Flex alignItems="center"  > <IoHeartCircleSharp color="red"/><Text> {Likecount}  likes</Text></Flex>
      <Text>3.8k veiws</Text>
       </Flex>
       <Flex height="50px" borderTop="1px solid grey" px="6" justifyContent="space-between">
        <Flex onClick={()=>{
          setLike(!Like)
          if(!Like){
            setLikecount(Likecount+1)
          }
          }} alignItems="center">{!Like?<BsHeart />: <BsHeartFill color="red"/>}<Text ml="2px"> Like</Text></Flex>
        <Flex alignItems="center"><BiComment/><Text ml="2px">Comment</Text></Flex>
        <Flex alignItems="center"><BsShare/><Text ml="2px">Share</Text></Flex>
       </Flex>
      </Box>
          
         </>   )
        
            
  }