import { Center, Heading, SimpleGrid  , Image} from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Banner from '../components/Banner/Banner'
import Card3 from '../components/Cards/Card3';
import Loading from '../components/Loading';
import { SearchContext } from '../context/SearchContextProvider'

function Searchpage() {
  const {Search} = useContext(SearchContext);
  const [Data , setData] = useState([]);
  const [Load , setLoad] = useState(true);
  
  
  useEffect(()=>{
    fetchData()
  },[Search])
  
  function fetchData(){
    let url = `${process.env.REACT_APP_API_URL}/hotels`
    if(!Search || Search===""){
      getData(url)
    }else{
      getData(`${url}?q=${Search}`)
    }
  }

  function getData(url){
   
    axios.get(url)
      .then(function (response) {
        setData(response.data)
        console.log(Data)      
        setLoad(false)
       
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  
  return (
    <>
    <Banner num={7} text="Exclusive Tours & Holiday Packages" />
    <Heading textAlign="center" textTransform="uppercase" mt="20px">{(Search && Search!=="")?`${Search}`:"Exclusive Tours & Holiday Packages"}</Heading>
    <Center mt="50px">{!Load?
    ((Data.length===0)?<Image src="https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result_still_2x.gif?compress=1&resize=600x400"/>:(Load?<Loading/>: 
      <SimpleGrid w="90%" columns={{lg:4 ,md:3 , sm:1 , base:1}} gap={10}>
        {Data.map((el)=><Link to={`/pakages/${el.id}`}><Card3 {...el}/></Link>)}
      </SimpleGrid>
    )):<Loading/>}
    </Center>
    </>
  )
}

export default Searchpage