import { Box, Button, Center,Text, Image, Input, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, SimpleGrid, Heading, FormLabel, FormControl, Switch } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import Banner2 from '../components/Banner/Banner2'
import { AuthContext } from '../context/AuthContextProvider'

function Uploadpage() {
    const {Account} = useContext(AuthContext)
    const [Upload , setUpload] =  useState({})
    const [sliderValue, setSliderValue] = useState(10)
    const [bsliderValue, setBSliderValue] = useState(100)
    const [blsliderValue, setBlSliderValue] = useState(0)
    
  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  }
    const [ Style , setStyle ] =  useState({ })
    const navigate = useNavigate()
    console.log(Account)
    const handlepost = ()=>{
        let user = Account.email.split("@");
        user = user[0]
         let obj = {...Upload, style : Style,name : user  }
         console.log(obj)
        if(obj.image!==""){
            axios.post(`${process.env.REACT_APP_API_URL}/feed`, obj)
            .then(function (response) {
              console.log(response);
              navigate("/explore")
            })
            .catch(function (error) {
              console.log(error);
            });
        }
    }
    const handleCss=(x)=>{
      console.log(x)
      setStyle(x)
    }
  return (
    <>
    <Banner2/>
    <Box w="80%" m="auto" p="6" border="1px solid grey" borderRadius={20}>
     <Center mb="50px" w="100" minH={40} >
    {(Upload.type==="video")? <iframe width="560" height="315" src={Upload.image} style={Style} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>:
      <Image src={Upload.image?Upload.image:"https://media.istockphoto.com/photos/crash-test-dummy-picture-id1047814320?b=1&k=20&m=1047814320&s=612x612&w=0&h=YOrVTva5dA9ag_Iw4J1VUUI7yOK6Kjx3BgcK8mVY7oM="} style={Style} />}
     </Center>
     {/* https://www.youtube.com/embed/B8Dqc7oiOik */}
     {/* https://www.youtube.com/embed/B8Dqc7oiOik */}
    
    <Heading>Filters</Heading>
    <SimpleGrid textAlign="center" fontSize={{lg:"20px",md:"15px",sm:"8px" ,base:"8px"}} gap={2} p={5} columns={{lg:8,md:6 , sm:4 , base:4}}  alignItems="center" justifyContent="space-evenly" >
      <Box >
      <img onClick={()=>{handleCss({filter:"brightness(70%) contrast(150%) saturate(0%) brightness(150%)"})}} style={{filter:"brightness(70%) contrast(150%) saturate(0%) brightness(150%)"}} src={(Upload.image && Upload.type==="image" )?Upload.image:"https://scbb.ihbt.res.in/SCBB_dept/video_tutorial/vd/examples/images/Swan_large.jpg"} alt="" />
      <Text>B&W</Text>
      </Box>
      <Box >
      <img onClick={()=>{handleCss({ filter:"saturate(0%) sepia(100%) contrast(150%) saturate(150%)"})}} style={{ filter:"saturate(0%) sepia(100%) contrast(150%) saturate(150%)"}} src={(Upload.image && Upload.type==="image" )?Upload.image:"https://scbb.ihbt.res.in/SCBB_dept/video_tutorial/vd/examples/images/Swan_large.jpg"} alt="" />
      <Text>Sepia</Text>
      </Box>
      <Box >
      <img onClick={()=>{handleCss({filter: "sepia(50%) contrast(150%) saturate(200%) brightness(100%) hue-rotate(-15deg)"})}} style={{filter: "sepia(50%) contrast(150%) saturate(200%) brightness(100%) hue-rotate(-15deg)"}} src={(Upload.image && Upload.type==="image" )?Upload.image:"https://scbb.ihbt.res.in/SCBB_dept/video_tutorial/vd/examples/images/Swan_large.jpg"} alt="" />
      <Text>Warm</Text>
      </Box>
      <Box >
      <img onClick={()=>{handleCss({ filter: " hue-rotate(180deg) sepia(75%) contrast(150%) saturate(300%) hue-rotate(180deg)"})}} style={{ filter: " hue-rotate(180deg) sepia(75%) contrast(150%) saturate(300%) hue-rotate(180deg)"}} src={(Upload.image && Upload.type==="image" )?Upload.image:"https://scbb.ihbt.res.in/SCBB_dept/video_tutorial/vd/examples/images/Swan_large.jpg"} alt="" />
      <Text>Cold</Text>
      </Box>
      <Box >
      <img onClick={()=>{handleCss({filter: "hue-rotate(-30deg) sepia(75%) contrast(150%) saturate(300%) hue-rotate(30deg)"})}} style={{filter: "hue-rotate(-30deg) sepia(75%) contrast(150%) saturate(300%) hue-rotate(30deg)"}} src={(Upload.image && Upload.type==="image" )?Upload.image:"https://scbb.ihbt.res.in/SCBB_dept/video_tutorial/vd/examples/images/Swan_large.jpg"} alt="" />
      <Text>Tint Green</Text>
      </Box>
      <Box >
      <img onClick={()=>{handleCss({ filter: "hue-rotate(-270deg) sepia(55%) contrast(150%) saturate(300%) hue-rotate(270deg)"})}} style={{ filter: "hue-rotate(-270deg) sepia(55%) contrast(150%) saturate(300%) hue-rotate(270deg)"}} src={(Upload.image && Upload.type==="image" )?Upload.image:"https://scbb.ihbt.res.in/SCBB_dept/video_tutorial/vd/examples/images/Swan_large.jpg"} alt="" />
      <Text>Tint Magenta</Text>
      </Box>
      <Box >
      <img onClick={()=>{handleCss({filter: "invert(60%)"})}} style={{filter: "invert(60%)"}} src={(Upload.image && Upload.type==="image" )?Upload.image:"https://scbb.ihbt.res.in/SCBB_dept/video_tutorial/vd/examples/images/Swan_large.jpg"} alt="" />
      <Text>Invert</Text>
      </Box>
      <Box >
      <img onClick={()=>{handleCss({ filter: "saturate(8)"})}} style={{ filter: "saturate(8)"}} src={(Upload.image && Upload.type==="image" )?Upload.image:"https://scbb.ihbt.res.in/SCBB_dept/video_tutorial/vd/examples/images/Swan_large.jpg"} alt="" />
      <Text>Saturated</Text>
      </Box>
    </SimpleGrid>
    <Center><Button mb={5} onClick={()=>{
        setStyle({})                        
        setSliderValue(10)
        setBSliderValue(100)
        setBlSliderValue(0)
    }}>Reset Filters</Button></Center>
     <Input onChange={(e)=>{
      let img = e.target.value;
      let type = "image";
      if(img.includes("youtu")){
        type = "video"
        img = img.split("/");
        console.log(img)
        img = img[img.length-1]
        img = `https://www.youtube.com/embed/${img}`
        console.log(img)
      }
     if(img.includes("drive.google.com")){
      img = img.split("file/d/");
      img = img[1];
      img = img.split("/view");
      img = img[0];
      img = `https://drive.google.com/uc?export=view&id=${img}`
      console.log(img)
     }
      setUpload({...Upload,image:img,type : type})}
      }  placeholder='Upload Your Image Link Here' textAlign="center" size='lg' w="100%" />
     {/* ***********************************borderradiusSlider************************************ */}
     <Box pt={6} pb={2}>
      <Heading>Adjustments</Heading>
        <label>Border Radius</label>
      <Slider mt={10} aria-label='slider-ex-6' defaultValue={sliderValue} onChange={(val) => {
        setSliderValue(val) 
        setStyle({...Style , borderRadius : `${sliderValue}%`}) }}>
        <SliderMark value={0} {...labelStyles}>
          0%
        </SliderMark>
        <SliderMark value={25} {...labelStyles}>
          25%
        </SliderMark>
        <SliderMark value={50} {...labelStyles}>
          50%
        </SliderMark>
        <SliderMark value={75} {...labelStyles}>
          75%
        </SliderMark>
        <SliderMark value={100} {...labelStyles}>
          100%
        </SliderMark>
        <SliderMark
          value={sliderValue}
          textAlign='center'
          bg='blue.500'
          color='white'
          mt='-10'
          ml='-5'
          w='12'
        >
          {sliderValue}%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
     {/* ******************************************************************************************  */}
     {/* ************************************Brightnessslider***************************************  */}
     <Box pt={6} pb={2}>
        <label>Brightness</label>
      <Slider mt={10} aria-label='slider-ex-6' defaultValue={bsliderValue} onChange={(val) => {
        setBSliderValue(val) 
        setStyle({...Style , filter : `brightness(${bsliderValue}%)`}) }}>
        <SliderMark value={0} {...labelStyles}>
          0%
        </SliderMark>
        <SliderMark value={25} {...labelStyles}>
          25%
        </SliderMark>
        <SliderMark value={50} {...labelStyles}>
          50%
        </SliderMark>
        <SliderMark value={75} {...labelStyles}>
          75%
        </SliderMark>
        <SliderMark value={100} {...labelStyles}>
          100%
        </SliderMark>
        <SliderMark
          value={bsliderValue}
          textAlign='center'
          bg='blue.500'
          color='white'
          mt='-10'
          ml='-5'
          w='12'
        >
          {bsliderValue}%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
     {/* ******************************************************************************************  */}
     {/* ***********************************bLUR**************************************************  */}
     <Box pt={6} pb={2}>
        <label>Blur</label>
      <Slider aria-label='slider-ex-6' min={-10} max={10} defaultValue={blsliderValue} onChange={(val) => {
        setBlSliderValue(val) 
        setStyle({...Style , filter : `blur(${blsliderValue}px)`}) }}>
        
        <SliderMark value={-10} {...labelStyles}>
          -10
        </SliderMark>
        <SliderMark value={-5} {...labelStyles}>
          -5
        </SliderMark>
        <SliderMark value={0} {...labelStyles}>
          0
        </SliderMark>
        <SliderMark value={5} {...labelStyles}>
          5
        </SliderMark>
        <SliderMark value={10} {...labelStyles}>
          10
        </SliderMark>
       
        <SliderMark
          value={blsliderValue}
          textAlign='center'
          bg='blue.500'
          color='white'
          mt='-10'
          ml='-5'
          w='12'
        >
          {blsliderValue}
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
     {/* ******************************************************************************************  */}
    
     <Input onChange={(e)=>{setUpload({...Upload,description:e.target.value})}} mt="20px"  placeholder='Write Your Text Here' textAlign="center" size='lg' w="100%" />
     <Button onClick={handlepost} mt="20px" w="100%" colorScheme="blue">Post</Button>
    </Box>
    </>
  )
}

export default Uploadpage