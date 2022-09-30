import { Button, Center, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Banner from '../components/Banner/Banner'
import Card3 from '../components/Cards/Card3';
import Loading from '../components/Loading';


function Pakages() {
  
  const [Visit , setVisit] = useState(false)
  const [Data , setData] = useState([]);
  const [Load , setLoad] = useState(true)
  
  useEffect(()=>{
    fetchData()
  },[Visit])
  
  function fetchData(){
    let url = `${process.env.REACT_APP_API_URL}/hotels`
    if(!Visit || Visit===""){
      getData(url)
    }else{
      getData(`${url}?q=${Visit}`)
    }
  }

  function getData(url){
   
    axios.get(url)
      .then(function (response) {
        setData(response.data)
        setLoad(false)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      console.log(Data)      
  }
  const handleVisit = (e)=>{
        setVisit(e.target.textContent)
  }
  
  return (
    <>
    <Banner num={7} text="Exclusive Tours & Holiday Packages" />
    <Flex m="auto" mt={{lg:"-150px",md:"-100px",sm:"-100px",base:"-100px"}}  mb="150px" maxW="800px" justifyContent="space-evenly" >
    <Button onClick={handleVisit} colorScheme='blue' bg="white" borderRadius={20} variant='outline'>
    Singapore
  </Button> 
  <Button onClick={handleVisit} colorScheme='blue' bg="white" borderRadius={20}  variant='outline'>
    Amsterdam
  </Button> 
  <Button onClick={handleVisit} colorScheme='blue' bg="white" borderRadius={20} variant='outline'>
    Bali
  </Button> 
  <Button onClick={handleVisit} colorScheme='blue' bg="white" borderRadius={20} variant='outline'>
    Manali
  </Button>
  <Button onClick={handleVisit} colorScheme='blue' bg="white" borderRadius={20} variant='outline'>
    London
  </Button>
    </Flex>
    <Heading textAlign="center" mt="20px">{(Visit && Visit!=="")?`Exclusive Tours & Holiday Packages in ${Visit}`:"Exclusive Tours & Holiday Packages"}</Heading>
    <Center mt="50px">
    {Load?<Loading/>: 
      <SimpleGrid w="90%" columns={{lg:4 ,md:3 , sm:1 , base:1}} gap={10}>
        {Data.map((el)=><Link key={el.id+el.price} to={`/pakages/${el.id}`}><Card3 {...el}/></Link>)}
      </SimpleGrid>
    }
    </Center>
    </>
  )
}

export default Pakages