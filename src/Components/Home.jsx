import About from "./About";
import Banner from "./Banner";
import Education from "./Education";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Service from "./Service";
import React from "react";
const Home = () => {
    return (
        <div >
         <Navbar/>
         <main className='max-w-7xl m-auto'>
               <Banner/>
           <About/>
            <Service/>
            <Education/>
         </main>
         <Footer/>
  
        </div>
    );
};

export default Home;