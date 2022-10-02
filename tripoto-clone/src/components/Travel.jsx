import { Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SearchContext } from '../context/SearchContextProvider'

function Travel() {
    const {toggleSearch} = useContext(SearchContext)
    const navigate = useNavigate()
    function handletravel (e){
       console.log(e.target.name)
       toggleSearch(e.target.name)
       navigate("/search")
    }
  return (
    <SimpleGrid w="80%" m="auto" columns={{lg:4 , md:4 , sm:2 , base:2}} gap={20} mb={50}>
        <Image onClick={handletravel} name="bali" borderRadius={20} src='https://www.willflyforfood.net/wp-content/uploads/2019/06/bali-travel-guide-pinterest.jpg.webp' />
        <Image onClick={handletravel} name="singapore" borderRadius={20} src='https://images-na.ssl-images-amazon.com/images/I/518vS8AzmtL.jpg' />
        <Image onClick={handletravel} name="amsterdam" borderRadius={20} src='https://images-na.ssl-images-amazon.com/images/I/91vMdty5dbL.jpg' />
        <Image onClick={handletravel} name="london" borderRadius={20} src='https://m.media-amazon.com/images/I/51+K51ZKDhL.jpg' />
    </SimpleGrid>
  )
}

export default Travel