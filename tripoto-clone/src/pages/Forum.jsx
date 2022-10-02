import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Center, Flex, Image, Input, InputRightAddon, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Banner2 from '../components/Banner/Banner2'
import Card5 from '../components/Cards/Card5';
import { AuthContext } from '../context/AuthContextProvider';

function Forum() {
    const toast = useToast()
    const [Data , setData] = useState([])
    const [Page , setPage] = useState(1)
    const {Account} = useContext(AuthContext)
    useEffect(()=>{
        getData()
    },[Page])

    function getData(){
   
        axios.get(`${process.env.REACT_APP_API_URL}/feeds?_sort=id&_order=desc&_page=${Page}&_limit=20`)
          .then(function (response) {
            setData(response.data)
            console.log(response)
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          console.log(Data)      
      }
  
      const handlePost = (e)=>{
         console.log(e.target.value)
         console.log(e.code)
         let user = Account.email.split("@");
         user = user[0]
         if(e.code==="Enter" && e.target.value!==""){
            let obj = {
                body : e.target.value,
                email : Account.email,
                name : user
             }
             console.log(user)
            axios({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}/feeds`,
                data: obj,
              })
                .then(function (response) {
                  if (response.data !== undefined) {
                    
                    return toast({
                      position: "bottom-left",
                      title: "Congratualtions !!",
                      description: `We Are Very Honored To Have Your Comment`,
                      status: "success",
                      duration: 5000,
                      isClosable: true,
                    });
                  }
                })
                .catch((error) => {
                  console.log(error);
                  return toast({
                    position: "bottom-left",
                    title: "Something Went Wrong!",
                    description: error.message,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                  });
                });
         }
      }
  return (<>
    <Banner2/>
    <Center>
        {(Account||Account.email==="")?
            <Alert w="80%" status='error'>
            <AlertIcon />
            <AlertTitle>Please Authenticate Yourself!</AlertTitle>
            <AlertDescription>Log In or Sign Up to have acess to this functionality</AlertDescription>
          </Alert>:
            <Input w="80%" onKeyPress={handlePost} placeholder='Basic usage' />

        }
       
        </Center>
    <Center>
        <Box w="80%">

     {(Data.length!==0)?(Data.map((el)=>{
         return <Card5 {...el}/>
        })):
        <Center><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSMBLdEbqM_VJyzbx_ov8cX0GXrAAoe5VF7S9drMO-K-K_FxOn6xZZ5K4Vjilbm7HAIBU&usqp=CAU"></Image></Center>}
        </Box>
    </Center>
    <Center mb={50}>
        <Flex w="80%" justifyContent="space-evenly">
            <Button colorScheme="teal" onClick={()=>{setPage(Page-1)}} disabled={Page<=1}>Newer</Button>
            <Button colorScheme="teal" onClick={()=>{setPage(Page+1)}} disabled={Data.length===0}>Older</Button>
        </Flex>
    </Center>
    </>

  )
}

export default Forum