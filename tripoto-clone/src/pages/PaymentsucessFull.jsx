import { Box, Button, Center, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Banner2 from '../components/Banner/Banner2'

function PaymentsucessFull() {
  return (
    <>
    <Banner2/>
    <Box>
<Center>

    <Image src="https://www.shikharclasses.in/wp-content/uploads/2020/04/PAYMENT-SUCCESS.png"/>
</Center>
    </Box>
    <Center>
    <Link to="/">
    <Button colorScheme="blue">
  Go Back to Home
    </Button>
    </Link>
    </Center>
    
    </>
  )
}

export default PaymentsucessFull