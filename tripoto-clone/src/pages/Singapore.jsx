import { Box } from '@chakra-ui/react'
import React from 'react'

function Singapore() {
  return (
    <>
    <Box width="100%" height="60px" backgroundColor="#2F9BDB"></Box>
    <Box w="100%"  >
    <video width="100%" poster="https://cdn1.tripoto.com/media/filter/nxxl/img/319486/Image/1640238919_singapore_web.png" playsinline="" controls="" loop="" muted="" autoplay="" preload="auto" controlslist="nodownload" >
   <source src="//stream.mux.com/ynvXtB01mp4Nor01SVD9TvRTsu00RQ95SPQ.m3u8" type="application/x-mpegURL"/>
   <source src="//stream.mux.com/ynvXtB01mp4Nor01SVD9TvRTsu00RQ95SPQ/medium.mp4" type="video/mp4"/>
   <source src="//stream.mux.com/ynvXtB01mp4Nor01SVD9TvRTsu00RQ95SPQ/low.mp4" type="video/mp4"/>
   <img class="width-100" src="https://cdn1.tripoto.com/media/filter/nxxl/img/319486/Image/1640238919_singapore_web.png" alt="banner video" />

   </video>
   {/* <iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe> */}
    </Box>
    </>
  )
}

export default Singapore