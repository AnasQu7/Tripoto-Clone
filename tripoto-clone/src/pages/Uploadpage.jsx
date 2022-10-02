import { Box, Button, Center, Image, Input, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
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
   
  return (
    <>
    <Banner2/>
    <Box w="80%" m="auto" p="6" border="1px solid grey" borderRadius={20}>
     <Center mb="50px" w="100" minH={40} >
      <Image src={Upload.image?Upload.image:"https://www.sbrv.org/wp-content/uploads/2019/11/preview.png"} style={Style} />
     </Center>
     <Button onClick={()=>{
        setStyle({})
        setSliderValue(10)
        setBSliderValue(100)
        setBlSliderValue(0)
    }}>Reset Filters</Button>
     <Input onChange={(e)=>{setUpload({...Upload,image:e.target.value})}}  placeholder='Upload Your Image Link Here' textAlign="center" size='lg' w="100%" />
     {/* ***********************************borderradiusSlider************************************ */}
     <Box pt={6} pb={2}>
        <label>Border Radius</label>
      <Slider aria-label='slider-ex-6' defaultValue={sliderValue} onChange={(val) => {
        setSliderValue(val) 
        setStyle({...Style , borderRadius : `${sliderValue}%`}) }}>
        <SliderMark value={25} {...labelStyles}>
          25%
        </SliderMark>
        <SliderMark value={50} {...labelStyles}>
          50%
        </SliderMark>
        <SliderMark value={75} {...labelStyles}>
          75%
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
      <Slider aria-label='slider-ex-6' defaultValue={bsliderValue} onChange={(val) => {
        setBSliderValue(val) 
        setStyle({...Style , filter : `brightness(${bsliderValue}%)`}) }}>
        <SliderMark value={25} {...labelStyles}>
          25%
        </SliderMark>
        <SliderMark value={50} {...labelStyles}>
          50%
        </SliderMark>
        <SliderMark value={75} {...labelStyles}>
          75%
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
      <Slider aria-label='slider-ex-6' min={0} max={20} defaultValue={blsliderValue} onChange={(val) => {
        setBlSliderValue(val) 
        setStyle({...Style , filter : `blur(${blsliderValue}px)`}) }}>
        <SliderMark value={5} {...labelStyles}>
          5
        </SliderMark>
        <SliderMark value={10} {...labelStyles}>
          10
        </SliderMark>
        <SliderMark value={15} {...labelStyles}>
          15
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