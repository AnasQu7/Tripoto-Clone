
import { ArrowBackIcon, ArrowForwardIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex, Heading } from '@chakra-ui/react'
import React, { useRef } from 'react'
import Card1 from '../Cards/Card1'



function Courosel({name , heading}) {
   const ScrollRef = useRef(null)

   const scrollRight=()=>{
    console.log(ScrollRef)
    ScrollRef.current.scrollLeft += 1000
  }
  const scrollLeft=()=>{
    ScrollRef.current.scrollLeft -= 1000
    console.log(ScrollRef)
     

   }
   const object ={
  partners : [
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1663242404_1662994966_gostops_ooty_1.jpg",
     title: "GoStops",
     description: "This Hostel Is a 100-Year-Old Colonial Bungalow Set in the Scenic Western Ghats"
    },
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660808085_shutterstock_1611239635_min.jpg",
     title: "SINGAPORE TOURISM BOARD",
     description: "Visit These 7 Chic Bars in Singapore if You’re in the Mood to Live up the Night!"
    },
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1661937030_manali_5_1.jpg",
     title: "GOSTOPS",
     description: "9 Hours From Delhi, This goSTOPS Hostel in Manali Offers Spectacular Views With a Dose of Fun"
    },
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1663242404_1662994966_gostops_ooty_1.jpg",
     title: "GoStops",
     description: "This Hostel Is a 100-Year-Old Colonial Bungalow Set in the Scenic Western Ghats"
    },
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660808085_shutterstock_1611239635_min.jpg",
     title: "SINGAPORE TOURISM BOARD",
     description: "Visit These 7 Chic Bars in Singapore if You’re in the Mood to Live up the Night!"
    },
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1661937030_manali_5_1.jpg",
     title: "GOSTOPS",
     description: "9 Hours From Delhi, This goSTOPS Hostel in Manali Offers Spectacular Views With a Dose of Fun"
    },
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1663242404_1662994966_gostops_ooty_1.jpg",
     title: "GoStops",
     description: "This Hostel Is a 100-Year-Old Colonial Bungalow Set in the Scenic Western Ghats"
    },
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660808085_shutterstock_1611239635_min.jpg",
     title: "SINGAPORE TOURISM BOARD",
     description: "Visit These 7 Chic Bars in Singapore if You’re in the Mood to Live up the Night!"
    },
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1661937030_manali_5_1.jpg",
     title: "GOSTOPS",
     description: "9 Hours From Delhi, This goSTOPS Hostel in Manali Offers Spectacular Views With a Dose of Fun"
    },
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660808085_shutterstock_1611239635_min.jpg",
     title: "SINGAPORE TOURISM BOARD",
     description: "Visit These 7 Chic Bars in Singapore if You’re in the Mood to Live up the Night!"
    },
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1661937030_manali_5_1.jpg",
     title: "GOSTOPS",
     description: "9 Hours From Delhi, This goSTOPS Hostel in Manali Offers Spectacular Views With a Dose of Fun"
    },
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1663242404_1662994966_gostops_ooty_1.jpg",
     title: "GoStops",
     description: "This Hostel Is a 100-Year-Old Colonial Bungalow Set in the Scenic Western Ghats"
    }
    
  ],
  places : [
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664282144_1656415934_pxl_20211127_110043484_mp_3_smaller.jpg",
    title: "By Sinchita Sinha",
    description: "Planning a 5-Day Trip to Kolkata? Here Are 15 Places To Choose From While Creating Your Itinerary!"
   },
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664282377_1556098119_bara_mangwa_1.jpg",
    title: "By Bongyatri - Sourav and Anindita...",
    description: "7 Weekend Getaways from Kolkata for an Offbeat Holiday"
   },
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664282484_1584373060_84357577_214370566369460_473810992900713292_n.jpg",
    title: "By Neeti Chopra",
    description: "Just an Hour's Drive Away From Kolkata, a Danish Town Awaits Your Visit"
   },
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1661507443_1633009115_243257387_1788683618007971_2371564452838209440_n_webp.jpg",
    title: "By Namrata Das Adhikary",
    description: "Born in October? Head Off to These Destinations to Celebrate Your Birthday Like Never Before!"
   },
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664274146_1664042070_136987276_881700859243748_3546152248174245285_n.jpg",
    title: "By Indiahikes",
    description: "6 Best Treks To Do In October And November To Witness The Spectacular Himalayan Autumn"
   },
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664282831_1474359789_sandakphu_the_eight_thousanders_indiahikes.jpg",
    title: "By Indiahikes",
    description: "6 Best Treks To Do In October And November To Witness The Spectacular Himalayan Autumn"
   },
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1661507222_1631391120_autum.jpg",
    title: "By Tanisha Mundra",
    description: "Best Places To Visit To Experience Autumn Beauty In India!"
   },
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1661742747_1661696105_fireworks_1953253_1920.jpg",
    title: "By Arhi",
    description: "Festivals in India to Look Forward to from September to December 2022!"
   },
   {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664282484_1584373060_84357577_214370566369460_473810992900713292_n.jpg",
   title: "By Neeti Chopra",
   description: "Just an Hour's Drive Away From Kolkata, a Danish Town Awaits Your Visit"
  },
   {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1661507443_1633009115_243257387_1788683618007971_2371564452838209440_n_webp.jpg",
   title: "By Namrata Das Adhikary",
   description: "Born in October? Head Off to These Destinations to Celebrate Your Birthday Like Never Before!"
  },
   {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664274146_1664042070_136987276_881700859243748_3546152248174245285_n.jpg",
   title: "By Indiahikes",
   description: "6 Best Treks To Do In October And November To Witness The Spectacular Himalayan Autumn"
  },
   {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664282831_1474359789_sandakphu_the_eight_thousanders_indiahikes.jpg",
   title: "By Indiahikes",
   description: "6 Best Treks To Do In October And November To Witness The Spectacular Himalayan Autumn"
  }
  ],
  international : [
  {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664283239_1491999123_screen_shot_2017_04_12_at_5_41_22_pm.png",
   title: "By Tripoto",
   description:  "From Istanbul to Cappadocia: How To Experience Turkey's Balloon-Filled Skies And Artistic Treasures "
  },
  {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664283413_img_20220521_092519.jpg",
   title: "By Riyanka Roy",
   description: "While Sara Ali Khan's Photos Are Buzzing on Instagram, Here's Exploring Istanbul Beyond Hagia Sofia"
  },
  {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664283617_1638782394_slide_7.jpg",
   title: "By Kadambari Bhatte (curlytravelmess)",
   description: "I Visited Bali Four Times and Here Are My 11 Reasons Why It Should Be On Your Travel Radar For 2022!"
  },
  {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1661938437_img_0927_min.jpg",
   title: "By Prageet Goel ",
   description: "Here Is The Only Travel Guide To Vietnam You'll Need"
  },
  {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664283239_1491999123_screen_shot_2017_04_12_at_5_41_22_pm.png",
   title: "By Tripoto",
   description:  "From Istanbul to Cappadocia: How To Experience Turkey's Balloon-Filled Skies And Artistic Treasures "
  },
  {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664283413_img_20220521_092519.jpg",
   title: "By Riyanka Roy",
   description: "While Sara Ali Khan's Photos Are Buzzing on Instagram, Here's Exploring Istanbul Beyond Hagia Sofia"
  },
  {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664283617_1638782394_slide_7.jpg",
   title: "By Kadambari Bhatte (curlytravelmess)",
   description: "I Visited Bali Four Times and Here Are My 11 Reasons Why It Should Be On Your Travel Radar For 2022!"
  },
  {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1661938437_img_0927_min.jpg",
   title: "By Prageet Goel ",
   description: "Here Is The Only Travel Guide To Vietnam You'll Need"
  },
  {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664283239_1491999123_screen_shot_2017_04_12_at_5_41_22_pm.png",
   title: "By Tripoto",
   description:  "From Istanbul to Cappadocia: How To Experience Turkey's Balloon-Filled Skies And Artistic Treasures "
  },
  {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664283413_img_20220521_092519.jpg",
   title: "By Riyanka Roy",
   description: "While Sara Ali Khan's Photos Are Buzzing on Instagram, Here's Exploring Istanbul Beyond Hagia Sofia"
  },
  {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664283617_1638782394_slide_7.jpg",
   title: "By Kadambari Bhatte (curlytravelmess)",
   description: "I Visited Bali Four Times and Here Are My 11 Reasons Why It Should Be On Your Travel Radar For 2022!"
  },
  {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1661938437_img_0927_min.jpg",
   title: "By Prageet Goel ",
   description: "Here Is The Only Travel Guide To Vietnam You'll Need"
  }
  ],
  travel : [
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664284466_1501572387_vedicvillage1.jpg",
   title: "LUXURY STAYS",
   description:  "Unwind At The Vedic Village Spa Resort For Ultimate Peace And Calm",
   author : "Aakanksha Magan"
  },
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664284743_1633518714_267103469.jpg",
   title: "LUXURY STAYS",
   description:  "Kolkata Just Got Its First Ever Boutique Hotel and It Overlooks the Victoria Memorial! ",
   author : "Kadambari Bhatte (curlytravelme)"
  },
  {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1661513462_1661510413_pench.jpg",
  title: "LUXURY STAYS",
  description:  "Stay At These Incredible Eco-Friendly Hotels In India With Stunning Locations Across The Country",
  author : "Tanvi Shah"
  },
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664285490_1504715462_29636144.jpg",
   title: "LUXURY STAYS",
   description:  "Fall In Love With Darjeeling All Over Again With Mayfair Darjeeling",
   author : "Sonalika Debnath"
  },
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664284466_1501572387_vedicvillage1.jpg",
   title: "LUXURY STAYS",
   description:  "Unwind At The Vedic Village Spa Resort For Ultimate Peace And Calm",
   author : "Aakanksha Magan"
  },
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664284743_1633518714_267103469.jpg",
   title: "LUXURY STAYS",
   description:  "Kolkata Just Got Its First Ever Boutique Hotel and It Overlooks the Victoria Memorial! ",
   author : "Kadambari Bhatte (curlytravelme)"
  },
  {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1661513462_1661510413_pench.jpg",
  title: "LUXURY STAYS",
  description:  "Stay At These Incredible Eco-Friendly Hotels In India With Stunning Locations Across The Country",
  author : "Tanvi Shah"
  },
    {img : "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664285490_1504715462_29636144.jpg",
   title: "LUXURY STAYS",
   description:  "Fall In Love With Darjeeling All Over Again With Mayfair Darjeeling",
   author : "Sonalika Debnath"
  }
  ]
   }
  return (<>
   
  <Box m="auto" w="80%" mb="40px"> <Heading>{heading}</Heading></Box>
   <Flex w="100%" justifyContent="center">
   <Button backgroundColor='white' onClick={scrollLeft} position="relative" left="-5px" borderRadius="500px" top="130px"><ChevronLeftIcon/></Button>

  
  <Box w="80%"  overflow="scroll" ref={ScrollRef} overflowY="hidden" mb="50px" scrollBehavior="smooth" overflowX="hidden" transiton="1s">
   <Flex  flexDirection="row"  width={{lg:"300%",md:"400%",sm:"800%",base:"1300%"}} gap={5}>{object[name].map((el,i)=><Card1 key={i} imageUrl={el.img} title={el.title} description={el.description}/>)}</Flex>
   </Box>
  
   
  <Button backgroundColor='white' onClick={scrollRight} position="relative" top="130px" right="-5px" borderRadius="500px" ><ChevronRightIcon/></Button>
   </Flex>
  </>)
}

export default Courosel