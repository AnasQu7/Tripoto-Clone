import { Box,Button,Image,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Banner2() {
  return (
    <Box width="100%" height="300px" display="flex" flexDirection="column"  mb="20px" alignItems="center"  backgroundImage={`url("/Images/banner8.jpg")`}>
        {/* <Image w="100%" zIndex={100} src="/Images/banner8.jpg"/> */}
        <Text fontFamily="'Great Vibes', cursive" mt="100px" fontSize="6vw" color="white" brightness="100%" >Singapore</Text>
        <Link to="/singapore"><Button bg="white" color="teal" borderRadius={20}  alignItems="center" >Visit Singapore</Button></Link>
    </Box>
  )
}

export default Banner2