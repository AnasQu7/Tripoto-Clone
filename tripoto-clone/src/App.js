
import { Box } from '@chakra-ui/react';
import './App.css';
import AllRoutes from './components/AllRoutes';
import WebFooter from './components/Footer/WebFooter';


import Navbar from './components/Navbar/Navbar';
import Taskbar from './components/Taskbar/TaskBar';


function App() {
  console.log(process.env.REACT_APP_API_URL)
  console.log("adjnk,dmnj")
  return (
    <div className="App" >
      <Navbar/>
      <Box minH="150vh">

      <AllRoutes/>
      </Box>
      
      <Taskbar/>
      <WebFooter/>
         </div>
  );
}

export default App;
