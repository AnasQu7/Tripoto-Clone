import { SimpleGrid, Skeleton, Box, Badge,Text } from "@chakra-ui/react";


function Load(){
   return <>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Box h="200px" width="100%" overflow="hidden" objectFit="contain" >
        <Skeleton width="100%" height="100%" />
        </Box>
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='0' colorScheme='white' color="teal">
             <Box display="flex" alignItems="center"> <Skeleton width="100%" height="20px" /></Box> 
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
           <Skeleton width="100%" height="20px" />
          </Box>
  
          <Box display="flex" alignItems="center" >
           
            <Box ml="10px" as='span' color='gray.600' fontSize='sm'>
             
            </Box>
          </Box>
  
          <Box display='flex' mt='2' alignItems='center'>
          <Skeleton width="100%" height="20px" />
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            <Skeleton width="100%" height="20px" />
            </Box>
          </Box>
        </Box>
      </Box>
   </>
}


export default function Loading2(){
    const arr = new Array(10).fill(0)
    return (
        <SimpleGrid w="90%" columns={{lg:4 ,md:3 , sm:1 , base:1}} gap={10}>
       {arr.map((el,i)=><Load key={el+i}/>)}
       </SimpleGrid>
    )
    
//     <SimpleGrid columns={{lg:4 , md:3 ,sm:1 ,base:1}} width="90%" gap={10} >
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
//   <Skeleton height="300px" width="300px"/>
// </SimpleGrid>
} 