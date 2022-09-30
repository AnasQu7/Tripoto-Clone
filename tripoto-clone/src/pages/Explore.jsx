import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Image } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Banner2 from '../components/Banner/Banner2'
import Card4 from '../components/Cards/Card4'

function Explore() {
    const [Page,setPage] = useState(1)
    useEffect(()=>{
        getData()
    },[Page])
    const [Exp,setExp] = useState([])
    function getData(){
        let url = `${process.env.REACT_APP_API_URL}/feed?_page=${Page}{1}&_limit=10`
        axios.get(url)
          .then(function (response) {
          
            setExp(response.data)
           
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          console.log(Exp.length)      
      }
  return (
    <>
    <Banner2/>
    <Box width="80%" margin="auto" >
     {(Exp.length===0)?<Image src="https://ih1.redbubble.net/image.1084348887.9358/st,small,507x507-pad,600x600,f8f8f8.jpg"/>:
                Exp.map((el)=>{
                    return (
                        <Card4 {...el}/>
                    )
                })
     }
    </Box>
    <Flex width="80%" margin="auto" justifyContent="space-evenly" >
        <Button disabled={Page<=1} onClick={()=>{setPage(Page-1)}} ><ArrowLeftIcon/></Button>
        <Button disabled={Exp.length===0} onClick={()=>{setPage(Page+1)}}><ArrowRightIcon/></Button>
    </Flex>
    </>
  )
}

export default Explore