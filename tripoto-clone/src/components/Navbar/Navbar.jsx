import {
  Text,
  IconButton,
  Box,
  Center,
  Flex,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Tooltip,
  InputGroup,
  InputRightAddon,
  InputLeftAddon,
  
} from "@chakra-ui/react";
import {
  SearchIcon,
  TriangleDownIcon,
} from "@chakra-ui/icons";
import { useState } from "react";
import "./navbar.css";
import Signin from "./Signin";
import Account from "./Account";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import Sidemenu from "../Sidemenu/Sidemenu";
import {Link} from "react-router-dom"
export default function Navbar({scheme}) {
  const [Style, setStyle] = useState(false);
  const [Hide, setHide] = useState(false);
  const { Auth } = useContext(AuthContext);
  window.addEventListener("scroll", () => {
    if (!Style && Math.floor(window.scrollY) > 180) {
      
      setStyle(true);
      setHide(true);
    } else if (Style && Math.floor(window.scrollY) < 180) {
     
      setStyle(false);
      setHide(false);
    }

  });

  return (
    <>
      <Flex
      zIndex="1000"
        flexDirection={{
          lg: "row",
          md: "column",
          sm: "column",
          base: "column",
        }}
        transition="0.5s"
        bg={Style ? (scheme? scheme :"#2F9BDB") : "Transparent"}
        p={2}
        w="100%"
        justifyContent={{
          lg: "space-between",
          md: "center",
          sm: "center",
          base: "center",
        }}
        pos="fixed"
        top="0"
        gap={{ lg: "40px", md: "5px", sm: "3px" }}
      >
        <Flex
          gap={1}
          alignItems="center"
          flexDirection={{
            lg: "row",
            md: "column",
            sm: "column",
            base: "column",
          }}
          justifyContent="space-around"
          minW="50%"
        >
          <Flex
            justifyContent="space-between"
            pl={5}
            pr={5}
            w={{ lg: "500px", md: "100%", sm: "100%", base: "100%" }}
          >
           <Link to="/">
           <Image
              src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg"
              alt="Tripoto Icon"
              objectFit="cover"
            />
           </Link>
            <Center>
              <Text
                display={{ lg: "none", md: "block", sm: "block" }}
                visibility={{ lg: "hidden", md: "initial", sm: "initial"  }}
                color="white"
              >
                GET APP
                  
              </Text>
              <Box display={{lg:"none" ,md:(!Style ? "block" : "none"),sm:(!Style ? "block" : "none"),base:(!Style ? "block" : "none") }} visibility={{lg:"hidden" ,md:(!Style ? "initial" : "hidden"),sm:(!Style ? "initial" : "hidden"),base:(!Style ? "initial" : "hidden") }}>

               <Sidemenu scheme="transparent" color="black"  />
              </Box>
            </Center>
          </Flex>
          <Spacer />
          <Box w="100%">
            <InputGroup
              bg="white"
              overflow="hidden"
              borderRadius={5}
              transition="1s"
              display={Hide ? "flex" : "none"}
            >
              <InputLeftAddon
                h="100%"
                display={{ lg: "none", md: "block", sm: "block" }}
                children={
                  <IconButton
                    aria-label="Search database"
                    icon={<SearchIcon />}
                  />
                }
              />
              <Input
                variant="unstyled"
                pl={2}
                placeholder="Search For Destinations Hotels & Activities"
              />
              <InputRightAddon
                h="100%"
                display={{ lg: "block", md: "none", sm: "none" }}
                visibility={{
                  lg: "inherit",
                  md: "hidden",
                  sm: "hidden",
                  base: "hidden",
                }}
                children={
                  <IconButton
                    aria-label="Search database"
                    icon={<SearchIcon />}
                  />
                }
              />
              <InputRightAddon
                h="100%"
                display={{ lg: "none", md: "block", sm: "block" }}
                visibility={{
                  lg: "hidden",
                  md: "inherit",
                  sm: "inherit",
                  base: "inherit",
                }}
                children={<Sidemenu />}
              />
            </InputGroup>
          </Box>
        </Flex>
        <Spacer />
        <Flex
          pl="20px"
          w="35%"
          pr="20px"
          gap={2}
          display={{ lg: "flex", md: "none", sm: "none", base: "none" }}
          visibility={{
            lg: "inherit",
            md: "hidden",
            sm: "hidden",
            base: "hidden",
          }}
        >
          {/* 88888888888888888888888888888 */}
          <Menu>
            <>
              <MenuButton color="white" >
                <Flex alignItems="center" gap="2px">
                  Inspiration <Spacer />
                  <TriangleDownIcon w="10px" />
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem><Link to="/singapore">Visit Singapore</Link></MenuItem>
                <MenuItem>Beaches</MenuItem>
                <MenuItem>Mountains</MenuItem>
                <MenuItem>Heritage</MenuItem>
                <MenuItem>Weekend Guid</MenuItem>
                <MenuItem>Upcomming Festival</MenuItem>
                <MenuItem>Honeymoon Pakage</MenuItem>
                <MenuItem>Wildlife tourism</MenuItem>
                <MenuItem>Road Trip</MenuItem>
                <MenuItem>Gateway Guid</MenuItem>
                <MenuItem>Luxoury Travel</MenuItem>
              </MenuList>
            </>
          </Menu>
          <Spacer />
          {/* 88888888888888888888888888888 */}
          <Center color="white">
            <Tooltip label="Forum" aria-label="A tooltip">
              <p style={{ colo: "white" }}>Forum</p>
            </Tooltip>
          </Center>
          <Spacer />
          {/* 88888888888888888888888888888 */}
          <Center color="white">
              <Link to="/pakages"> <p style={{ colo: "white" }}>Pakages</p></Link>
          </Center>
          <Spacer />
          {/* 88888888888888888888888888888 */}
          <Menu>
            <>
              <MenuButton color="white">
                <Flex alignItems="center" w="98px" gap="2px">
                  Publish Trip <Spacer />
                  <TriangleDownIcon w="10px" />
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem>Create New</MenuItem>
                <MenuItem>Upload Photos/Videos</MenuItem>
                <MenuItem>Import Blog</MenuItem>
              </MenuList>
            </>
          </Menu>
          {/* 88888888888888888888888888888 */}
          <Spacer />
          {!Auth ? <Signin /> : <Account />}
        </Flex>
      </Flex>

      
    </>
  );
}
