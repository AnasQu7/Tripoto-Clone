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
  ArrowUpIcon,
  HamburgerIcon,
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

export default function Navbar() {
  const [Style, setStyle] = useState(false);
  const [Hide, setHide] = useState(false);
  const { Auth } = useContext(AuthContext);
  window.addEventListener("scroll", () => {
    if (!Style && Math.floor(window.scrollY) > 180) {
      console.log("yes");
      setStyle(true);
      setHide(true);
    } else if (Style && Math.floor(window.scrollY) < 180) {
      console.log("no");
      setStyle(false);
      setHide(false);
    }

    console.log(window.scrollY);
  });

  return (
    <>
      <Flex
        flexDirection={{
          lg: "row",
          md: "column",
          sm: "column",
          base: "column",
        }}
        transition="0.5s"
        bg={Style ? "#2F9BDB" : "Transparent"}
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
            <Image
              src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg"
              alt="Tripoto Icon"
              objectFit="cover"
            />
            <Center>
              <Text
                display={{ lg: "none", md: "block", sm: "block" }}
                visibility={{ lg: "hidden", md: "initial", sm: "initial" }}
                color="white"
              >
                GET APP
              </Text>
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
              <MenuButton color="white">
                <Flex alignItems="center" gap="2px">
                  Inspiration <Spacer />
                  <TriangleDownIcon w="10px" />
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem>Visit Singapore</MenuItem>
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
            <Tooltip label="Pakages" aria-label="A tooltip">
              <p style={{ colo: "white" }}>Pakages</p>
            </Tooltip>
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

      <Box h="1000px">
        <img
          src="https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1342&q=80"
          width="100%"
          alt=""
        />
      </Box>
    </>
  );
}
