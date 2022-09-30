import { StarIcon } from "@chakra-ui/icons"
import { Badge, Box ,Image, Text} from "@chakra-ui/react"
import {ImLocation2} from "react-icons/im"
import {BiRupee} from "react-icons/bi"


export default function Card3(props) {
    
   
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Box h="200px" width="100%" overflow="hidden" objectFit="contain" >
        <Image src={props.imageUrl?props.imageUrl:"https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"}  h="100%" w="100%" objectFit="cover" />

        </Box>
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='0' colorScheme='white' color="teal">
             <Box display="flex" alignItems="center"><ImLocation2 mr="5px"/><Text ml="5px">{props.Cities[0]}</Text></Box> 
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {/* {property.beds} beds &bull; {property.baths} baths */}
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {props.title}
          </Box>
  
          <Box display="flex" alignItems="center" >
            <BiRupee/>{props.Price}
            <Box ml="10px" as='span' color='gray.600' fontSize='sm'>
              onwards
            </Box>
          </Box>
  
          <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < props.rating ? 'yellow.500' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {props.ratingby ? props.ratingby : 0} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }