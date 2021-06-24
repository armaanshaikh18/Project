import React,{useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import InfoSection from '../components/InfoSection';
<<<<<<< HEAD
import { homeObjOne,homeObjTwo,homeObjThree } from '../components/InfoSection/Data';
=======
import {  homeObjOne, homeObjTwo , homeObjThree} from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
>>>>>>> 116bf591b366444b4305e50ab44bbe745d7c1c1d
const Home = () => {
   const [isOpen, setIsOpen] = useState(false)

   const toggle = ()=> {
       setIsOpen(!isOpen);
   };


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
<<<<<<< HEAD
            <Services/>
            <InfoSection {...homeObjThree}/>
=======
            <Services />
            <InfoSection {...homeObjThree}/>
            <Footer />
  
>>>>>>> 116bf591b366444b4305e50ab44bbe745d7c1c1d
        </>
    );
};

export default Home;
