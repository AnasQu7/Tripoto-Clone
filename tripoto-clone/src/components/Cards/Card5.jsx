import { Avatar, Badge, Box, Text } from '@chakra-ui/react'
import React from 'react'

function Card5(props) {
  return (
    <Box my={5} p={6} border="1px solid" borderRadius={20} w="100%">
        <Box mb={2} display="flex" alignItems="center">
      <Avatar size="sm" name={props.name} src='https://bit.ly/tioluwani-kolawole' />
      <Text ml={2}>{props.name}</Text>
        </Box>
        <Box py={2} borderTop="1px solid grey" borderBottom="1px solid grey" alignItems="Center">
        <Text>{props.body}</Text>
        </Box>
        <Box mt="5px" alignItems="center">
        <Badge ml='1' fontSize='0.8em' colorScheme='green'>
        {props.email}
        </Badge>
            
        </Box>

    </Box>
  )
}

export default Card5