import { Badge, Box,Image } from "@chakra-ui/react"

export default function Card1(props) {
    const {
      imageUrl,
      title,
      description,
      author
    } = props
  
    return (
      <Box maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Box h="200px" width="100%" overflow="hidden" objectFit="contain" >
        <Image src={imageUrl} h="100%" w="100%" objectFit="cover" alt={title} />

        </Box>
  
        <Box pl="5px" pt="6" pb="6">
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='white' color="orange" >
              {title}
            </Badge>
            
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {description}
          </Box>
          
          <Box pl="1px" pt="6" pb="6">
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='white' color="skyBlue" >
             {author?`BY ${author}`:""}
            </Badge>
            
          </Box>
           </Box>
        </Box>
      </Box>
    )
  }