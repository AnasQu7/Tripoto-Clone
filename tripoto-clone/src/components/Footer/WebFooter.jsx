import { Box,Divider,Image,Text,Flex, SimpleGrid, Heading, Center} from "@chakra-ui/react";
import { FaFacebookSquare, FaInstagramSquare, FaPinterest, FaTwitterSquare, FaYoutube } from 'react-icons/fa';
 import "./foot.css" 

  export default function WebFooter(){
    return (
        <>
          <Box zIndex={10} position="relative"  bg="white" w="100%" borderTop="1px solid grey" p="50px" >
          <Box display={{lg:"flex" , md:"block", sm : "block" , base:"block" }} justifyContent="space-between">
          <Box display={{lg:"block",md:"flex",sm:"flex",base:"flex"}} justifyContent="space-between" alignItems="center">
            <Box textAlign="center"  width="240px">
              <Image src="https://cdn1.tripoto.com/assets/2.9/img/logo/header-blue.svg"/>
              <Text>India's Largest Travel Community</Text>
              <Divider colorScheme="black" zIndex={0} h="1px" border="2px" mb="10px" bg="black"/>
              <Flex justifyContent="space-evenly" gap="10px">
                <FaFacebookSquare size="30px" className="social"/>
                <FaTwitterSquare size="30px" className="social"/>
                <FaInstagramSquare size="30px" className="social"/>
                <FaYoutube size="30px" className="social"/>
                <FaPinterest size="30px" className="social"/>
                </Flex>
            </Box>
            <Image mt="50px" display={{lg:"block",md:"block",sm:"none",base:"none"}} visibility={{lg:"initial",md:"initial",sm:"hidden",base:"hidden"}} src="https://cdn1.tripoto.com/assets/2.9/img/logo/download-android-app.svg"/>
          </Box>

          <SimpleGrid display={{lg:"grid" , md:"grid" ,sm:"none",base:"none"}} visibility={{ld:"initial",md:"initial",sm:"hidden",base:"hidden"}} columns={{lg:4 , md:2 , sm:2, base:2}}>
            <Box>
              <Text fontWeight="bold">About Tripoto</Text>
              <Text>How It Works</Text>
              <Text>FAQ’s</Text>
              <Text>Privacy Policy</Text>
              <Text>Terms & Conditions</Text>
              <Text>Careers</Text>
              <Text>Contact Us</Text>
            </Box>

            <Box>
            <Text fontWeight="bold">Products</Text>
             <Text>Tour Packages</Text>
             <Text>Travel Guides</Text>
             <Text>Trips & Itineraries</Text>
             <Text>Weekend Getaways</Text>
             <Text>Places to Visit</Text>
             <Text>Other Travel Categories</Text>
             <Text>Tripoto Forum</Text>
             <Text>Honeymoon Packages</Text>
            </Box>

            <Box>
            <Text fontWeight="bold">Important Travel Links</Text>
             <Text>Goa Tourism</Text>
             <Text>Dubai Tourism</Text>
             <Text>Singapore Tourism</Text>
             <Text>Manali Tourism</Text>
             <Text>Manali Tourism</Text>
             <Text>Bali Tourism</Text>
             <Text>Sri Lanka Tourism</Text>
             <Text>Honeymoon Destinations In India</Text>
            </Box>

            <Box>
            <Text fontWeight="bold">Partner Programs</Text>
             <Text>Buy Travel Leads</Text>
             <Text>Partner With Us</Text>
             <Text>Earn Credits</Text>
             <Text>Get Paid To Travel</Text>
             <Text>Import Blog To Itinerary</Text>
             
            </Box>
          </SimpleGrid>
          </Box>
          <Center mt="25px" h="50px"  alignItems="center" borderTop="1px solid grey"><Text>© All rights reserved.</Text></Center>
          </Box>
        </>
    )
  }