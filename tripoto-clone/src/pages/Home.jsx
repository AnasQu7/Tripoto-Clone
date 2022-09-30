import { Box, Center, Flex, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Banner from '../components/Banner/Banner'
import Courosel from '../components/Courosel/Courosel'
import Card1 from '../components/Cards/Card1'
import Card2 from '../components/Cards/Card2'

function Home() {
  return (<>
   <Banner num={6} text="India's Largest Community of Travellers"/>
    <Center mt="50px" mb="50px">
    <SimpleGrid columns={{lg:4 , md :2 ,sm : 2 , base:2}} w="90%" justifyContent="space-evenly">
      <img src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png" alt="" />
      <img src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png" alt="" />
      <img src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192273_bb.png" alt="" />
      <img src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192344_dd.png" alt="" />
    </SimpleGrid>
    </Center>
    <Courosel name="partners" heading="In the Spotlight: Partnerships" />
    <Courosel name="places" heading="Find Best Places to Visit in India in October & November" />
    <Center mb="50px" mt="50px"><img width="80%" src="./Images/home1.jpg" alt="" /></Center>
    <SimpleGrid gap={10} m="auto" w="80%" columns={{lg:4 , md:2 , sm:1 , base:1}}>
      
      <Card2 imageUrl="https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1664274341_1664213448_living_root_bridge.jpg" description="9 Traditional Sustainable Practices In India That We Must Revive to Save the Planet" />
      <a target="blanck" href='https://www.youtube.com/watch?v=8Q4pO3ByzvA&list=PL-Zpgmu8EPLbFd3NxNH5QMGSDZUDBKVMP'><Card2 imageUrl="https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1664274477_green_escape.jpeg" description="Watch Green Escapes: An Unparalleled Road Trip Across India Done Resposibly" /></a>
      <a href='https://www.instagram.com/p/CjAuZaFN34h/?hl=en' target="blanck"><Card2 imageUrl="https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1664366418_north.jpg" description="Watch: Reviving Kath Kuni Architecture With NORTH" /></a>
      <a href='https://www.instagram.com/p/CjCouINvPt3/?hl=en' target="blanck"><Card2 imageUrl="https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1664366571_tent_1.jpg" description="Watch: Working With Locals At Nayalap" /></a>
    </SimpleGrid>
    <Courosel name="international" heading="Plan You Next International Trip During October & November" />
    <Courosel name="travel" heading="Check Out Best Hotels and Properties for Every Type of Traveller" />
    
    
  

  </>
  )
}

export default Home