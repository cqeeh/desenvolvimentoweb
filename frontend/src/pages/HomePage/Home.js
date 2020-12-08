import React from 'react';
import { homeObjOne,homeObjFive,homeObjFour,homeObjOneWhite,homeObjFourWhite,homeObjFiveWhite} from './Data';
import { InfoSection } from '../../Components';
import { VideoPlayer } from '../../Components';
import Slider from '../../Components/Slider';
import images from '../../images';
import { Navbar, Footer } from '../../Components';

function Home() {
  var object,objectfive,objectfour;
  if (global.darkMode==true) {
    object = homeObjOne;
    objectfive = homeObjFive;
    objectfour= homeObjFour;
  } else {
      object = homeObjOneWhite;
      objectfive= homeObjFiveWhite;
      objectfour=homeObjFourWhite;
  }
  return (
    <>
      <Slider slides={images} />
      <InfoSection {...object}/>
      <InfoSection {...objectfour} />
      <VideoPlayer {...objectfive}/>
      <Footer/>
   
    </>
  );
}

export default Home;
