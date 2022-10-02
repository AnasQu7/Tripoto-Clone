import { Box, Center, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card2 from '../components/Cards/Card2'
import Card3 from '../components/Cards/Card3'
import Courosel from '../components/Courosel/Courosel'

function Singapore() {
  const [Data , setData] = useState([])
  useEffect(()=>{
    getData()
  },[])
  function getData(){
   
    axios.get(`${process.env.REACT_APP_API_URL}/hotels?q=singapore`)
      .then(function (response) {
        setData(response.data)
       
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      console.log(Data)      
  }
  return (
    <>
    <Box width="100%" height="60px" backgroundColor="#2F9BDB"></Box>
    <Box w="100%" mt="1px" >
    <video width="100%" poster="https://cdn1.tripoto.com/media/filter/nxxl/img/319486/Image/1640238919_singapore_web.png" controls loop preload autoPlay>
   <source src="//stream.mux.com/ynvXtB01mp4Nor01SVD9TvRTsu00RQ95SPQ.m3u8" type="application/x-mpegURL"/>
   <source src="//stream.mux.com/ynvXtB01mp4Nor01SVD9TvRTsu00RQ95SPQ/medium.mp4" type="video/mp4"/>
   <source src="//stream.mux.com/ynvXtB01mp4Nor01SVD9TvRTsu00RQ95SPQ/low.mp4" type="video/mp4"/>
   <img class="width-100" src="https://cdn1.tripoto.com/media/filter/nxxl/img/319486/Image/1640238919_singapore_web.png" alt="banner video" />

   </video>
   <Center><Heading py={50} as="h1" fontSize={50} fontFamily="cursive" >Welcome To Singapore</Heading></Center>
   <Center m="auto" mb={5} width="80%"><Image width="100%" src='https://www.treat.com.sg/assets/user_photos/1518860980_Carousel_Restaurant_Buffet_Breakfast_Spread___TREAT.jpg'/></Center>
   <Courosel name="travel" heading="Check Out Best Hotels and Properties for Every Type of Traveller" />
   <Center m="auto" mb={5} width="80%"><Image width="100%" src='https://dkf0vydrjg1g3.cloudfront.net/wp-content/uploads/2015/11/Singapore-Open-Carousel.jpg'/></Center>
   
   <SimpleGrid gap={10} m="auto" mt={30} w="80%" columns={{lg:4 , md:2 , sm:1 , base:1}}>
      
      <Card2 imageUrl="https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1664274341_1664213448_living_root_bridge.jpg" description="9 Traditional Sustainable Practices In India That We Must Revive to Save the Planet" />
      <a target="blanck" href='https://www.youtube.com/watch?v=8Q4pO3ByzvA&list=PL-Zpgmu8EPLbFd3NxNH5QMGSDZUDBKVMP'><Card2 imageUrl="https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1664274477_green_escape.jpeg" description="Watch Green Escapes: An Unparalleled Road Trip Across India Done Resposibly" /></a>
      <a href='https://www.instagram.com/p/CjAuZaFN34h/?hl=en' target="blanck"><Card2 imageUrl="https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1664366418_north.jpg" description="Watch: Reviving Kath Kuni Architecture With NORTH" /></a>
      <a href='https://www.instagram.com/p/CjCouINvPt3/?hl=en' target="blanck"><Card2 imageUrl="https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1664366571_tent_1.jpg" description="Watch: Working With Locals At Nayalap" /></a>
    </SimpleGrid>
   <Center m="auto" mt={10} mb={10} width="80%"><Image width="100%" src='https://www.mof.gov.sg/images/librariesprovider3/budget-quiz/fy2022-budget-statement-carousel.jpg?sfvrsn=8f25018b_1'/></Center>
   <Center my={50}><Heading>Hotels In Singapore</Heading></Center>
     <Center> 
      <SimpleGrid w="90%" columns={{lg:4 ,md:3 , sm:1 , base:1}} gap={10}>
        {Data.map((el)=><Link key={el.id+el.price} to={`/pakages/${el.id}`}><Card3 {...el}/></Link>)}
      </SimpleGrid></Center>
    </Box>
    </>
    
  )
}

export default Singapore