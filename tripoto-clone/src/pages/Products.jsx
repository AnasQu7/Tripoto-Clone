import {
    Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner2 from "../components/Banner/Banner2";
import { ImLocation2 } from "react-icons/im";
import Payment from "../components/payment/Payment";

function Products() {
  useEffect(() => {
    getData();
  }, []);
  const [ProdData, setProdData] = useState([]);

  const prod = useParams();

  function getData() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/hotels?id=${prod.id}`)
      .then(function (response) {
        setProdData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  console.log("prod", ProdData);
  console.log("prod", prod);

  return (
    <>
      {ProdData.map((el) => {
        return (
          <>
            <Banner2 />
            <Box padding={5}>
              <Flex
                w="100%"
                h="80%"
                flexDirection={{
                  lg: "row",
                  md: "column",
                  sm: "column",
                  base: "column",
                }}
              >
                <Box
                  px="20px"
                  w={{ lg: "65%", md: "100%", sm: "100%", base: "100%" }}
                  h={{ lg: "100%", md: "65%", sm: "65%", base: "65%" }}
                  fontFamily="sans-serif"
                >
                  <Box width="90%" m="auto">
                    <Image width="100%" src={el.imageUrl} />
                    <Heading mt={5}>{el.title}</Heading>
                    <Flex alignItems="center" mt={5}>
                      <ImLocation2 size="25px" color="teal" />
                      <Text ml={2}>{el.Cities[0]}</Text>
                    </Flex>
                    <Divider h="1px" bg="black" mt="5px" mb="5px" />
                    <Flex
                      h="20px"
                      mt="5px"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Badge ml="1" fontSize="1.0em" colorScheme="green">
                        4 Days · 3 Nights
                      </Badge>
                      <Box
                        display="flex"
                        w="180px"
                        justifyContent="space-between"
                        alignItems="baseline"
                      >
                        <Heading as="h4" size="lg">
                          ₹{el.Price}
                        </Heading>
                        <span color="grey">/ Person</span>
                      </Box>
                    </Flex>
                    <Image mb="5px" src="/Images/sinp1.png" />
                    <Divider h="1px" bg="black" mt="5px" mb="5px" />
                    <Heading mb="5px" mt="10px">
                      Overview
                    </Heading>
                    <Text size="20px">
                      Upon landing in {el.Cities[0]}, you'll find new flavours
                      to whet your appetite, fresh forays into sustainability,
                      bold experiences to broaden the imagination and countless
                      ways to rejuvenate your mind and body.
                    </Text>
                    <Text size="20px">{el.Cities[0]} {el.Cities[1]}</Text>

                    <Heading mb="5px" mt="10px">
                      Hotel Details
                    </Heading>
                    <UnorderedList>
                      <ListItem>4 Star Hotel with Breakfast</ListItem>
                    </UnorderedList>

                    <Heading mb="5px" mt="10px">
                      Inclusions
                    </Heading>
                    <UnorderedList>
                      <ListItem>Lorem ipsum dolor sit amet</ListItem>
                      <ListItem>Consectetur adipiscing elit</ListItem>
                      <ListItem>Integer molestie lorem at massa</ListItem>
                      <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                      <ListItem>Integer molestie lorem at massa</ListItem>
                      <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                      <ListItem>Integer molestie lorem at massa</ListItem>
                      <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    </UnorderedList>

                    <Heading mb="5px" mt="10px">
                      Exclusions
                    </Heading>
                    <UnorderedList>
                      <ListItem>Items not included in INCLUSIONS list</ListItem>
                    </UnorderedList>

                    <Accordion mt="50px" defaultIndex={[0]} allowMultiple>
                      <AccordionItem>
                        <h1 >
                          <AccordionButton>
                            <Box flex="1" textAlign="left" fontSize="30px">
                            Terms and Conditions
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h1>
                        <AccordionPanel pb={4}>
                        <OrderedList>
                      <ListItem>Lorem ipsum dolor sit amet</ListItem>
                      <ListItem>Consectetur adipiscing elit</ListItem>
                      <ListItem>Integer molestie lorem at massa</ListItem>
                      <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                      <ListItem>Integer molestie lorem at massa</ListItem>
                      <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                      <ListItem>Integer molestie lorem at massa</ListItem>
                      <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                      <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                      <ListItem>Integer molestie lorem at massa</ListItem>
                      <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                      <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                      <ListItem>Integer molestie lorem at massa</ListItem>
                      <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                      <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                      <ListItem>Integer molestie lorem at massa</ListItem>
                      <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    </OrderedList>
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem>
                        <h2>
                          <AccordionButton>
                            <Box flex="1" textAlign="left" fontSize="30px">
                            Cancellation Policy
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </Box>
                </Box>
                <Box
                  w={{ lg: "25%", md: "100%", sm: "100%", base: "100%" }}
                  h={{ lg: "100%", md: "25%", sm: "25%", base: "25%" }}
                  
                  position="sticky" top="100px"
                >
                    <Payment {...el}/>
                </Box>
              </Flex>
            </Box>
          </>
        );
      })}
    </>
  );
}

export default Products;
