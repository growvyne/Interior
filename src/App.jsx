import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import TopHeaderBar from './components/TopHeaderBar';
import Navbar from './components/Navbar';
import Carousel from './components/carousel';
import Cursor from "./components/CustomCursor";
import ThreeSectionContainer from './components/ThreeSection';
import WhoWeAre from './components/whoweware';
import FourCards from './components/Fourcards';
import MoreAbout from './components/moreAbout';
import OurServicesSection from './components/ourServices';
import OurServicesSection2 from './components/ourService2';
import Clints from './components/clients';
import Footer from './components/footer';
import OurProjects from './components/ourProjects';

import './index.css';

const App = () => {
  return (
    <div>
      <TopHeaderBar />
      <Navbar />
      <Carousel />
      <ThreeSectionContainer />
      <br />
      <br />
      <WhoWeAre />
      <FourCards />
      <MoreAbout />
      <OurServicesSection/>
      <OurServicesSection2/>
       <OurProjects/>
      <Clints />
      <Footer />

     
      
    <br />
  &nbsp;
  <br />
    </div>
  )
}

export default App