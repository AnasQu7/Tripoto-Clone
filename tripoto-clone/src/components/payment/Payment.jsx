import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, FormControl, FormHelperText,Text, FormLabel, Heading, Input, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";
import Checkout from "./Checkout"


function Payment(props) {
    const {Auth} = useContext(AuthContext)
    const [Count ,setCount] = useState(1)
  return (
    <>
      <FormControl  border="1px solid" p="10px" color="grey" borderRadius={10}>
        <Heading as='h4' size='md' mb="15px">Please share your details to get a custom quote</Heading>
        <Input mb="15px" type="email" placeholder="Email address"/>
        <Input mb="15px" type="text" placeholder="Full Name"/>
        <Input mb="15px" type="tel" placeholder="Contact Number"/>
        <Input mb="15px" type="email" placeholder="Depature City"/>
        <Flex  mb="15px" alignItems="center" justifyContent="space-between">
            <Box>Number Of People</Box>
            <Flex justifyContent="space-between" width="120px" alignItems="center">
                <Button onClick={()=>{setCount(Count-1)}} disabled={Count<=1} variant='outline'>-</Button>
                <Text>{Count}</Text>
                <Button onClick={()=>{setCount(Count+1)}} variant='outline'>+</Button>
            </Flex>
        </Flex>
        <Input mb="15px" placeholder="Departure Date" size="md" type="datetime-local"/>
       
        {Auth?"":<Alert status='error' mb="5px" p="1px" justifyContent="center">
           <AlertIcon />
           <AlertDescription>Please Login to continue. <Link >Login</Link></AlertDescription>
         </Alert>}
        
        <Checkout disabled={!Auth} {...props}/>
        <FormHelperText textAlign="center">I accept the Terms of Use and Privacy Policy of Tripoto.</FormHelperText>
      </FormControl>
    </>
  );
}

export default Payment;
