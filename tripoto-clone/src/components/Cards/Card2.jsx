import { Badge, Box,Image } from "@chakra-ui/react"

export default function Card2(props) {
    const {
      imageUrl,
      description
     
    } = props
  
    return (
      <Box minH="330px" maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Box h="200px" width="100%" overflow="hidden" objectFit="contain" >
        <Image src={imageUrl}  h="100%" w="100%" objectFit="cover" />

        </Box>
  
        <Box pl="5px" pt="6" pb="6">
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h1'
            lineHeight='tight'
            
          >
            {description}
          </Box>
         
         
        </Box>
      </Box>
    )
  }