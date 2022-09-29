import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import Banner from '../components/Banner/Banner'
import Courosel from '../components/Courosel/Courosel'

function Home() {
  return (<>
   <Banner num={6} text="India's Largest Community of Travellers"/>
    <Courosel/>
    <Center><img width="80%"  src="./Images/home1.jpg" alt="" /></Center>
  </>
  )
}

export default Home